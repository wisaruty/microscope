/**
 * Created by Yim on 8/7/2558.
 */
Meteor.publish('posts',function(){
    return Posts.find();
});
