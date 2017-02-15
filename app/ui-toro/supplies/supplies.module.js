var suppliesCtrl = require('./supplies.ctrl');
var suppliesRoute = require('./supplies.route');
var qdSupplies = require('./qd-supplies.directive');
var qdOrderHistory = require('./qd-order-history.directive');
var qdReoccurringOrders = require('./qd-reoccurring-orders.directive');
var qdViewSuppliesCart = require('./qd-view-supplies-cart.directive');

angular
  .module('app.ui.supplies', [])
  .controller('suppliesCtrl', suppliesCtrl.suppliesCtrl)
  .config(suppliesRoute.configureRoutes)
  
  .directive("qdSupplies", qdSupplies.qdSupplies)
  .directive("qdOrderHistory", qdOrderHistory.qdOrderHistory)
  .directive("qdReoccurringOrders", qdReoccurringOrders.qdReoccurringOrders)
  .directive("qdViewSuppliesCart", qdViewSuppliesCart.qdViewSuppliesCart);