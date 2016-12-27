/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

    Channel.create({name : 'general'})
    .then((channel) => {

      Message.create({content : 'im a message'})
      .then(message => {

        // Populate record
        channel.messages.add(message)

        return new Promise((resolve, reject) => {
          channel.save(function(err){

            // Just to print that Channel has been populated
            Channel.findOne(channel.id).populate('messages').then(popChannel => {
              console.log(' ')
              console.log('--------------')
              console.log('Populated channel')
              console.log('save callback')
              console.log(popChannel)
            })

            if(err) reject(err)
            resolve()
          })
        })
      })
    })
    .then(cb)
    .catch(console.log)
};
