define(function(){function e(){viewer.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(110,31,23e6)})}function r(){viewer.scene.screenSpaceCameraController.enableZoom=!0,o.contains(a)&&o.remove(a,!1),o.contains(i)&&o.remove(i,!1)}var a,i,o,n=function(){o=viewer.scene.imageryLayers,$("#SZSatellite").click(function(){viewer.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(parseFloat(120.6401),parseFloat(31.3069),2e3),duration:1}),viewer.scene.screenSpaceCameraController.enableZoom=!1,o.contains(a)?o.raiseToTop(a):a=o.addImageryProvider(new Cesium.TileMapServiceImageryProvider({url:"data/SuZhouSatellite",credit:"苏州卫星地图"}))}),$("#SZDigital").click(function(){viewer.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(parseFloat(120.6401),parseFloat(31.3069),2e3),duration:1}),viewer.scene.screenSpaceCameraController.enableZoom=!1,o.contains(i)?o.raiseToTop(i):i=o.addImageryProvider(new Cesium.TileMapServiceImageryProvider({url:"data/SuZhouDigital",credit:"苏州电子地图"}))}),$("#clearCity").click(function(){e(),r()})};return n.prototype.destroy=function(){},n});