define(["../data/ProvinceData"],function(e){var e=new e,i=function(){function i(e){for(var i=0;i<n.length;i++)if(e==n[i].name){if(i>33)viewer.entities.add({name:"端点",position:Cesium.Cartesian3.fromDegrees(n[i].value[0],n[i].value[1]),point:{color:Cesium.Color.RED,pixelSize:4,outlineColor:Cesium.Color.BLACK,outlineWidth:1}}),viewer.entities.add({position:Cesium.Cartesian3.fromDegrees(n[i].value[0],n[i].value[1]),name:"label",label:{text:n[i].name,font:"24px Helvetica",fillColor:Cesium.Color.SKYBLUE,outlineColor:Cesium.Color.BLACK,outlineWidth:2,style:Cesium.LabelStyle.FILL_AND_OUTLINE,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,(-9))}}),viewer.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(n[i].value[0],n[i].value[1],20375),duration:2});else{var l="data/JsonMap/chineseProvince/"+n[i].word+".json";dataSource=Cesium.GeoJsonDataSource.load(l,{stroke:Cesium.Color.YELLOW,strokeWidth:1}),viewer.dataSources.add(dataSource),viewer.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(n[i].value[0],n[i].value[1],6e5),duration:2})}break}}const n=e.getProvinceData();for(var t=new Array,r=0;r<n.length;r++)t[r]=n[r].name;$("#search_name").on("input",function(){if(""===$(this).val())return $("#ul_list").hide(),void console.log("请输入。。。。");$("#ul_list").show(),$("#ul_list").html("");for(var e=$("#search_name").val(),n=l(e,t),r=0;r<(n.length>5?5:n.length);r++)$("#ul_list").append('<li id="place_'+r+'" value="'+n[r]+'" name="searchList">'+n[r]+"</li>");$($("#ul_list").children().get(0)).click(function(){console.log($("#ul_list").children().get(0).innerHTML),viewer.entities.removeAll(),viewer.dataSources.removeAll(),$("#search_name").val($("#ul_list").children().get(0).innerHTML),$("#ul_list").hide(),i($("#ul_list").children().get(0).innerHTML)}),$($("#ul_list").children().get(1)).click(function(){console.log($("#ul_list").children().get(1).innerHTML),viewer.entities.removeAll(),viewer.dataSources.removeAll(),$("#search_name").val($("#ul_list").children().get(1).innerHTML),$("#ul_list").hide(),i($("#ul_list").children().get(1).innerHTML)}),$($("#ul_list").children().get(2)).click(function(){console.log($("#ul_list").children().get(2).innerHTML),viewer.entities.removeAll(),viewer.dataSources.removeAll(),$("#search_name").val($("#ul_list").children().get(2).innerHTML),$("#ul_list").hide(),i($("#ul_list").children().get(2).innerHTML)}),$($("#ul_list").children().get(3)).click(function(){console.log($("#ul_list").children().get(3).innerHTML),viewer.entities.removeAll(),viewer.dataSources.removeAll(),$("#search_name").val($("#ul_list").children().get(3).innerHTML),$("#ul_list").hide(),i($("#ul_list").children().get(3).innerHTML)}),$($("#ul_list").children().get(4)).click(function(){console.log($("#ul_list").children().get(4).innerHTML),viewer.entities.removeAll(),viewer.dataSources.removeAll(),$("#search_name").val($("#ul_list").children().get(4).innerHTML),$("#ul_list").hide(),i($("#ul_list").children().get(4).innerHTML)})}),$("#search").click(function(){if(""===$("#search_name").val()){var e=new Popup({contentType:4,isReloadOnClose:!1,width:340,height:80});return e.setContent("title","提示！"),e.setContent("alertCon","请输入地名！"),e.build(),void e.show()}if(""===$("#ul_list").html()){var e=new Popup({contentType:4,isReloadOnClose:!1,width:340,height:80});return e.setContent("title","提示！"),e.setContent("alertCon","请输入正确的地名！"),e.build(),e.show(),void $("#search_name").val("")}})},l=function(e,i){var l=[];for(var n in i){var t=new RegExp("^("+e+")");t.test(i[n])&&l.push(i[n])}return l};return i});