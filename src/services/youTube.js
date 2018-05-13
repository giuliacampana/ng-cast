angular.module('video-player')
.service('youTube', function($http, $window){

  this.getData = function(query, cb) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        key: $window.YOUTUBE_API_KEY,
        q: query,
        type: 'video',
        videoEmbeddable: 'true' 
      }      
    }).then(function({data}) {
      if (cb) {
        cb(data.items);
      }
    }, function() {
      alert('error');
    });
  }

});
