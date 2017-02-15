'use strict';

function avatarDirective() {
  var directive = {
    scope: {
      initials: '=',
      avatarimage: '='
    },
    template: require('./avatar.html'),
    restrict: 'E'
  };
  return directive;
}

exports.avatarDirective = avatarDirective;