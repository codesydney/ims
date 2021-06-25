const mongoose = require('mongoose')
const validator = require('validator')

const Basic_user_schema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    service_provider: {
        type: String,
    }
});

const Basic_user_model = mongoose.model('breakfast', Basic_user_schema)

module.exports = Basic_user_model



const The_model = mongoose.model('the_model', {
    name:{
        type:String,
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
    },
    photo:{
        type:String,
    },
    mobileNbr:{
        type:Number,
        required:true
    },
    roles:{
        type:[String],
        required:true
    },
    createdAt:{
        type:Date,
        required:true
    },
    updatedAt:{
        type:Date,
        required:true
    },
    customer:{
        ratingsAverage:{
            type:Number,
        },
        ratingsQuantity:{
            type:Number,
        },
        creditCard:{
            nbr: {
                type:Number,
                required:true
            },
            expiry:{
                type:Number,
                required:true
            },
            cvc:{
                type:Number,
                required:true
            }
        }
    },
    provider:{
        ratingsAverage:{
            type:Number,
        },
        ratingsQuantity:{
            type:Number,
        },
        bankAccount:{
            accountName:{
                type:Number,
                required:true
            },
            accountNbr:{
                type:Number,
                required:true
            },
            bsb:{
                type:Number,
                required:true
            }
        },
        billAddress:{
            line1:{
                type:String,
                required:true
            },
            line2:{
                type:String,
                required:true
            },
            suburb:{
                type:String,
                required:true
            },
            state:{
                type:String,
                required:true
            },
            postCode:{
                type:Number,
                required:true
            }
        }
    },

})