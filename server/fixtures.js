/**
 * Created by Yim on 8/7/2558.
 */
if(Posts.find().count() === 0 ){
    Posts.insert({
        title:'Introducing Telescope',
        url:'http://sss.com'
    });
    Posts.insert({
        title:'Meteor',
        url:'http://sss.com'
    });
    Posts.insert({
        title:'The meteor book',
        url:'http://sss.com'
    });
};