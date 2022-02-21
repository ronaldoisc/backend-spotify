const {Schema,model} = require('mongoose');


const TokenSchema=Schema({
    token:{
        type:String
    },
    time:{
        type:String
    }
})

module.exports=model('Token',TokenSchema);