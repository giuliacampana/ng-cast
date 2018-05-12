angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      videoEntry: '<',
    },
    controller: function() {
      console.log(this);
    },
    templateUrl: 'src/templates/videoListEntry.html',
    
  });
