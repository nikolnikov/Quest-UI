'use strict';

RedditService.$inject = ['$q', '$http', '$injector'];
function RedditService($q, $http, $injector) {

  this.getRedditItemsQ = getRedditItemsQ;

  // get reddit items for a certain category
  function getRedditItemsQ(category) {

    // reject if not a a valid category
    if (!category) {
      return $q.reject();
    }

    var url = "http://www.reddit.com/r/" + category + ".json";
    var req = $http.get(url).then(function(res) {
      var data, children, items;
      
      data = res.data;
      children = data.data.children;

      // each children item has a data property - that is the one we want to get
      items = _.pluck(children, 'data');
      return items;
    });
    //var qzSpinner = $injector.get('qzSpinner');
    //var p = qzSpinner.spinQ(req);
    return req;
  }
}

exports.RedditService = RedditService;