var avatarDirective = require('./avatar.directive');

angular.module('qd.qz.directives.avatar', ['ngMaterial'])
  .directive('qdAvatar', avatarDirective.avatarDirective);