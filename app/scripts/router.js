define([
  'jquery',
  'underscore',
  'backbone',
  'views/todo/todo'
], function($, _, Backbone, TodoView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'todo': 'showTodo',

      // Default
      '*actions': 'defaultAction',
      '' : 'showTodo'
    },
    showTodo: function(){
      var todoView = new TodoView();
      todoView.render();
    },
    defaultAction: function() {
      console.log('No route');
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});