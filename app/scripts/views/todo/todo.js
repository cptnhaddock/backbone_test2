define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'models/todo/todo',
    'text!../../../templates/todo/todo.html'
    ], function($, _, Backbone, Handlebars, TodoModel, TodoViewTemplate) {
        var TodoView = Backbone.View.extend({
            el: $('#container'),
            template: Handlebars.compile(TodoViewTemplate),
            render: function() {
                var todo = new TodoModel();
                todo.set('name', 'Mike');
                this.$el.append(this.template({model : todo.toJSON()}));
                return this;
            }
        });

        return TodoView;
});