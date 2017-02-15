'use strict';

//
// read reddit items for a specific category
//
var getRedditItems = {
  key: "getRedditItems",
  httpMethod: 'GET',
  url: "http://www.reddit.com/r/{category}.json",
  transformResponse: getRedditItems_TransformResponse
};

//
// transform response of redit items
//
function getRedditItems_TransformResponse(res) {
  var children = res.data.children;
  // each children item has a data property - that is the one we want to get
  return _.pluck(children, 'data');
}
   

//
// register all
//
var config = {

  requests: {
    getRedditItems: getRedditItems
  }
}
    

exports.config = config;
  