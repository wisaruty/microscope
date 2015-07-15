Router.configure({
  LayoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {return Meteor.subscribe('posts'); }
});
Router.route('/',{name:'postsList'});
Router.route('posts/:_id',{
  name:'postPage',
  data: function () {return Posts.findOne(this.param._id); }
});

//Router.onBeforeAction('dataNotFound',{only:'postPage'});
