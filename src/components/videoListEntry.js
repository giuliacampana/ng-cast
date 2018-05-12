angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      videoEntry: '<',
    },
    templateUrl: 'src/templates/videoListEntry.html',
    
  });
