Router.configure({
  LayoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {return Meteor.subscribe('posts'); }
});
Router.route('/',{name:'postsList'});
Router.route('posts/:_id',{
  name:'postPage'
});

