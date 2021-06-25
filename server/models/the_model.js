const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
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

UserSchema.methods.toJSON = function(){
    const the_data = this.toObject()
    delete the_data.password
    delete the_data.tokens
    return the_data
}

//----------- CREATE TOKEN ---------------
UserSchema.methods.create_token = async function(){
    const new_token = jwt.sign({_id: this._id.toString()}, 'testingjwt')
    this.tokens = this.tokens.concat({token: new_token})
    await this.save()
    return new_token
}

UserSchema.statics.check_login = async (email, password)=>{
    console.log('CHECK LOGIN FUNCTION -> ')
    const user = await User.findOne({
        email:email
    })

    if(user == undefined){
        return console.log('cannot find user')
    }
    console.log('USER->', user)
    console.log('USER PWORD', user.password)
    console.log('THE PWORD', password)
    const password_checked_using_brypt = await bcrypt.compare(password, user.password)
    console.log('LINE 88',password_checked_using_brypt)
    if(password_checked_using_brypt == true){
        console.log('correct password')
        return user
    }else{
        throw new Error('fail password')
    }
}

UserSchema.pre('save', async function(next){
    if(this.isModified('password')){
        const result = await bcrypt.hash(this.password, 8)
        this.password = result
        console.log('PWORD HASH RESULT', result)
    }
    next()
})

// DELETE USER
UserSchema.pre('remove', async function(next){
    console.log('PRE REMOVE FUNCTION')
    console.log(this)

    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User