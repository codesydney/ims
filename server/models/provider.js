const mongoose = require('mongoose')

const Provider = mongoose.model('provider', {
    name:{
        type:String,
        required:true
    },
    provider:{
        type:Boolean,
        required:true
    },
    email:{
        type:String,
        validate(the_email){
            console.log(validator.isEmail(the_email))
            if(validator.isEmail(the_email)!=true){
                throw new Error('email fail')
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(the_password){
            console.log('is it working?')
            if(the_password.length < 6){
                throw new Error('password is too short')
            }
        }
    }
})

module.exports = Provider