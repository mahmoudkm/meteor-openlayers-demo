var generateMap = function(layerSource){
	
	var layer = new ol.layer.Tile();

	var map = new ol.Map({
	  layers:[layer],	  
	  target: 'map',
	  view: new ol.View({
	    center: [0, 0],
	    zoom: 2
	  })

	});

	if(layerSource == "osm"){		
		layer.setSource(new ol.source.OSM());

	}else if(layerSource == "msBing"){
		layer.setSource(new ol.source.BingMaps({
		            	 key: '',
		            	 imagerySet: 'Aerial'
		          	 	}));

	}else if(layerSource == "mapQuest"){
		layer.setSource(new ol.source.MapQuest({layer: 'sat'}));

	}


}


Template.mapDemo.events({
  'change .mapSourceSelector': function(e) {
  		generateMap($(e.target).val());
  }
});

Template.mapDemo.rendered = function(){
	generateMap('osm');
};



