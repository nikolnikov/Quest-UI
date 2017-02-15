'use strict';



configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
function configureRoutes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('reddit', {
      parent: 'app',
      url: '/reddit/:redditCat',
      views: {
        'qdcontent@': {
          templateUrl: 'app/ui/reddit/reddit.html',
          controller: 'RedditCtrl',
          controllerAs: 'vm'
        }
      },

      // data to be injected into controller
      resolve: {
        data: getRedditItemsQ
      }
  });
}

//
// retrieve all reddit items for a given category
// category s
//
getRedditItemsQ.$inject = ['qzSpinner', 'request','$stateParams'];
function getRedditItemsQ(qzSpinner, request, $stateParams) {
  
  // run 'getRedditItems' request ...
  var req = request.runQ("getRedditItems", {category: $stateParams.redditCat});

  // ... with progress notification
  return qzSpinner.spinQ(req).then( function (redditItems) {
    return {
      category: $stateParams.redditCat,
      redditItems: redditItems
    };
  });
}

exports.configureRoutes = configureRoutes;