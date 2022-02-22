const {Schema,model} = require('mongoose');


const TokenSchema=Schema({
    token:{
        type:String
    },
    update_at:{
        type:String
    }
})

module.exports=model('Token',TokenSchema);

