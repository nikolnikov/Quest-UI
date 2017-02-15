var redditService = require('./reddit.service');

angular
  .module('app.services', [])
  .service('redditService', redditService.RedditService);