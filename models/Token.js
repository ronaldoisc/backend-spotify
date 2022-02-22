const {Schema,model} = require('mongoose');


const TokenSchema=Schema({
    token:{
        type:String
    },
    time:{
        type:Number
    }
})

module.exports=model('Token',TokenSchema);