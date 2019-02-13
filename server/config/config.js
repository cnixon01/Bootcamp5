//This file holds any configuration variables we may need
//'config.js' is usually ignored by git to protect sensitive information, such as your database's username and password


module.exports = {
  db: {
    uri: 'mongodb://admin:password1@ds123635.mlab.com:23635/bootcamp3nixon', //place the URI of your mongo database here.
  },
  port: 8080
};
