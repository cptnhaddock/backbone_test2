define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    var Todo = Backbone.Model.extend({
        defaults : {
            name: '',
            completed: false
        },
        initialize : function() {
            console.log('Todo inits');
            this.on('change:name', function(value) {
                console.log('Todo changed');
            });
        }
    });

    return Todo;
});