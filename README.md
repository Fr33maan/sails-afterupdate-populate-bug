# testSavePopulate

The issue is that afterUpdate lifecylcle callback should be called with updated values as doc says but it is not populated.  
I don't know if it is a desired behaviour but it is quite strange as I cannot use lifecycle callback when I associate a model.  


Basically all is in :

- [Channel.js](https://github.com/l1br3/sails-afterupdate-populate-bug/blob/master/api/models/Channel.js)
- [Message.js](https://github.com/l1br3/sails-afterupdate-populate-bug/blob/master/api/models/Message.js)
- [config/bootstrap.js](https://github.com/l1br3/sails-afterupdate-populate-bug/blob/master/config/bootstrap.js)
