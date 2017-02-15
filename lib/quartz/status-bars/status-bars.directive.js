'use strict';

/**
 * @ngdoc directive
 * @name qdStatusBars
 * @module qd.qz.directives.status-bars
 * @restrict E
 * 
 * @description
 * `qdStatusBars` displays status bars with number of bars progressed
 * 
 * @param {number} numberOfBars total number of bars in Grey.(Max number of bars supported are 20).
 * @param {number} progressedBars total number of progressed bars in Green.(Max Number of progressed bars supported are 20).
 * @param {string} progressStatusText status bars description
 * 
 */
	function statusBarsDirective(){
        //Usage:
        //<qd-status-bars></qd-status-bars>
        // Creates:
        //  ...
        // See: qd-status-bars.html
		var directive = {
	    	scope: {
	        	'numberOfBars': '=',
	        	'progressedBars': '=',
	        	'progressStatusText': '='
	      	},
	      	restrict: 'E',
	      	template: require('./status-bars.html'),
	        link: function(scope, element, attrs) {
	            scope.$watch('numberOfBars', function(value) {
	            	if(!scope.numberOfBarsArray || scope.numberOfBarsArray.length==0) {
	            		scope.numberOfBarsArray = new Array(value);
	            	}
	            	if(scope.numberOfBarsArray.length < value) {
	            		for(var index = scope.numberOfBarsArray.length; scope.numberOfBarsArray.length<value; index++) {
	            			scope.numberOfBarsArray.push(index);
	            		}
	            	} else if(scope.numberOfBarsArray.length > value) {
	            		for(var index = scope.numberOfBarsArray.length; scope.numberOfBarsArray.length>value; index--) {
	            			scope.numberOfBarsArray.pop();
	            		}
	            	}
	            });
	        }
	  	};
	  	return directive;
	}

exports.statusBarsDirective = statusBarsDirective;
