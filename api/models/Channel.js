/**
 * Channel.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : {type: 'string'},

    messages: {
      collection: 'message',
      via : 'channels'
    },

  },

  afterUpdate(values, cb){

    console.log(' ')
    console.log('--------------')
    console.log('UNpopulated channel')
    console.log('afterUpdate')

    Channel.findOne(values.id).populate('messages')
    .then(unpopChannel => {

      console.log('Why channel is unpopulated ?')
      console.log(unpopChannel)
      cb()
    })
  }
};
