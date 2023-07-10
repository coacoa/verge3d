// Auto-generated
let project = new Project('e_learning_1_0_0');

project.addSources('Sources');
project.addLibrary("C:/soft/ArmorySDK2305/armsdk/armory");
project.addLibrary("C:/soft/ArmorySDK2305/armsdk/iron");
project.addParameter('armory.trait.internal.UniformsManager');
project.addParameter("--macro keep('armory.trait.internal.UniformsManager')");
project.addShaders("build_e-learning/compiled/Shaders/*.glsl", { noembed: false});
project.addAssets("build_e-learning/compiled/Assets/**", { notinlist: true });
project.addAssets("build_e-learning/compiled/Shaders/*.arm", { notinlist: true });
project.addAssets("C:/Users/gowa8/Documents/verge3d_apps/e-learning/box_signs.jpg", { notinlist: true });
project.addAssets("C:/Users/gowa8/Documents/verge3d_apps/e-learning/cardboard_diffuse.jpg", { notinlist: true });
project.addAssets("C:/Users/gowa8/Documents/verge3d_apps/e-learning/grid.png", { notinlist: true });
project.addAssets("C:/Users/gowa8/Documents/verge3d_apps/e-learning/logo.png", { notinlist: true });
project.addAssets("C:/Users/gowa8/Documents/verge3d_apps/e-learning/noise.png", { notinlist: true });
project.addAssets("C:/soft/ArmorySDK2305/armsdk/armory/Assets/brdf.png", { notinlist: true });
project.addAssets("C:/soft/ArmorySDK2305/armsdk/armory/Assets/smaa_area.png", { notinlist: true });
project.addAssets("C:/soft/ArmorySDK2305/armsdk/armory/Assets/smaa_search.png", { notinlist: true });
project.addAssets("environment.hdr", { notinlist: true });
project.addParameter('--debug');
project.addDefine('arm_deferred');
project.addDefine('arm_csm');
project.addDefine('rp_hdr');
project.addDefine('rp_renderer=Deferred');
project.addDefine('rp_shadowmap');
project.addDefine('rp_shadowmap_cascade=1024');
project.addDefine('rp_shadowmap_cube=512');
project.addDefine('rp_background=World');
project.addDefine('rp_render_to_texture');
project.addDefine('rp_compositornodes');
project.addDefine('rp_antialiasing=SMAA');
project.addDefine('rp_supersampling=1');
project.addDefine('rp_ssgi=SSAO');
project.addDefine('arm_assert_level=Warning');
project.addDefine('arm_soundcompress');
project.addDefine('arm_audio');
project.addDefine('arm_skin');
project.addDefine('arm_morph_target');
project.addDefine('arm_particles');
project.addDefine('arm_resizable');
project.addDefine('armory');


resolve(project);
