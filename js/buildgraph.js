var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function initGraph(){
  // init data
  
  var json = [
	{
      "adjacencies": [], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "thing", 
      "name": "Thing"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "thing", 
          "nodeFrom": "genre", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "genre", 
      "name": "Genre"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "thing", 
          "nodeFrom": "person", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "person", 
      "name": "Person"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "thing", 
          "nodeFrom": "agent", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "agent", 
      "name": "Agent"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "thing", 
          "nodeFrom": "product", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "product", 
      "name": "Product"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "thing", 
          "nodeFrom": "theme", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "theme", 
      "name": "Theme"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "thing", 
          "nodeFrom": "organization", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "organization", 
      "name": "Organization"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "thing", 
          "nodeFrom": "mediatype", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "mediatype", 
      "name": "MediaType"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "genre", 
          "nodeFrom": "bookgenre", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "bookgenre", 
      "name": "BookGenre"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "genre", 
          "nodeFrom": "musicgenre", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "musicgenre", 
      "name": "MusicGenre"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "person", 
          "nodeFrom": "singer", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "singer", 
      "name": "Singer"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "person", 
          "nodeFrom": "author", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "author", 
      "name": "Author"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "person", 
          "nodeFrom": "composer", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "composer", 
      "name": "Composer"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "person", 
          "nodeFrom": "producer", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "producer", 
      "name": "Producer"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "person", 
          "nodeFrom": "musicband", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "musicband", 
      "name": "MusicBand"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "person", 
          "nodeFrom": "buyer", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "buyer", 
      "name": "Buyer"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "person", 
          "nodeFrom": "seller", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "seller", 
      "name": "Seller"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "product", 
          "nodeFrom": "books", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "books", 
      "name": "Books"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "product", 
          "nodeFrom": "music", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "music", 
      "name": "Music"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "organization", 
          "nodeFrom": "salesorganization", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "salesorganization", 
      "name": "SalesOrganization"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "organization", 
          "nodeFrom": "publisher", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "publisher", 
      "name": "Publisher"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "mediatype", 
          "nodeFrom": "musicmediatype", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "musicmediatype", 
      "name": "MusicMediaType"
    },
	{
      "adjacencies": [
        {
          "nodeTo": "mediatype", 
          "nodeFrom": "bookmediatype", 
          "data": {}
        },
      ], 
      "data": {
        "$color": "#83548B", 
        "$type": "circle"
      }, 
      "id": "bookmediatype", 
      "name": "BookMediaType"
    }
  ];
  // end
  // init ForceDirected
  var fd = new $jit.ForceDirected({
    //id of the visualization container
    injectInto: 'ontologyGraph',
    //Enable zooming and panning
    //with scrolling and DnD
    Navigation: {
      enable: true,
      type: 'Native',
      //Enable panning events only if we're dragging the empty
      //canvas (and not a node).
      panning: 'avoid nodes',
      zooming: 10 //zoom speed. higher is more sensible
    },
    // Change node and edge styles such as
    // color and width.
    // These properties are also set per node
    // with dollar prefixed data-properties in the
    // JSON structure.
    Node: {
      overridable: true,
      dim: 7
    },
    Edge: {
      overridable: true,
      color: '#23A4FF',
      lineWidth: 0.4
    },
    // Add node events
    Events: {
      enable: true,
      type: 'Native',
      //Change cursor style when hovering a node
      onMouseEnter: function() {
        fd.canvas.getElement().style.cursor = 'move';
      },
      onMouseLeave: function() {
        fd.canvas.getElement().style.cursor = '';
      },
      //Update node positions when dragged
      onDragMove: function(node, eventInfo, e) {
        var pos = eventInfo.getPos();
        node.pos.setc(pos.x, pos.y);
        fd.plot();
      },
      //Implement the same handler for touchscreens
      onTouchMove: function(node, eventInfo, e) {
        $jit.util.event.stop(e); //stop default touchmove event
        this.onDragMove(node, eventInfo, e);
      }
    },
    //Number of iterations for the FD algorithm
    iterations: 200,
    //Edge length
    levelDistance: 130,
    // This method is only triggered
    // on label creation and only for DOM labels (not native canvas ones).
    onCreateLabel: function(domElement, node){
      // Create a 'name' and 'close' buttons and add them
      // to the main node label
      var nameContainer = document.createElement('span'),
          style = nameContainer.style;
      nameContainer.className = 'name';
      nameContainer.innerHTML = node.name;
      domElement.appendChild(nameContainer);
      style.fontSize = "0.8em";
      style.color = "#222";
      //Toggle a node selection when clicking
      //its name. This is done by animating some
      //node styles like its dimension and the color
      //and lineWidth of its adjacencies.
      nameContainer.onclick = function() {
        //set final styles
        fd.graph.eachNode(function(n) {
          if(n.id != node.id) delete n.selected;
          n.setData('dim', 7, 'end');
          n.eachAdjacency(function(adj) {
            adj.setDataset('end', {
              lineWidth: 0.4,
              color: '#23a4ff'
            });
          });
        });
        if(!node.selected) {
          node.selected = true;
          node.setData('dim', 17, 'end');
          node.eachAdjacency(function(adj) {
            adj.setDataset('end', {
              lineWidth: 3,
              color: '#36acfb'
            });
          });
        } else {
          delete node.selected;
        }
        //trigger animation to final styles
        fd.fx.animate({
          modes: ['node-property:dim',
                  'edge-property:lineWidth:color'],
          duration: 500
        });
        
        //$jit.id('inner-details').innerHTML = "You clicked on " + node.name + " and the ID is " + node.id;
		$("#receiver").append("You chose " + node.name + " to explore further.");
		closeOverlay();
      };
    },
    // Change node styles when DOM labels are placed
    // or moved.
    onPlaceLabel: function(domElement, node){
      var style = domElement.style;
      var left = parseInt(style.left);
      var top = parseInt(style.top);
      var w = domElement.offsetWidth;
      style.left = (left - w / 2) + 'px';
      style.top = (top + 10) + 'px';
      style.display = '';
    }
  });
  // load JSON data.
  fd.loadJSON(json);
  // compute positions incrementally and animate.
  fd.computeIncremental({
    iter: 40,
    property: 'end',
    onStep: function(perc){
      Log.write(perc + '% loaded...');
    },
    onComplete: function(){
      Log.write('done');
      fd.animate({
        modes: ['linear'],
        transition: $jit.Trans.Elastic.easeOut,
        duration: 2500
      });
    }
  });
  // end
}