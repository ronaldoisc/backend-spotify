
var request = require('request'); // "Request" library
const Token=require('../models/Token');
const renewToken =  async (req, res) => {
    
       let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
        },
        form: { grant_type: 'client_credentials'},
        json: true
    };
    request.post(authOptions, async function (error, response, body) {

        if (!error && response.statusCode === 200) {
          
            let token = body.access_token;
            var today = new Date();
            var currenTime = today.getHours() + "." + today.getMinutes();
            // let lastDoc = (await Token.find({}).sort({_id: -1}).limit(1))[0];
            const tokenSpotify= new Token({token,time:currenTime});
            await tokenSpotify.save();
            res.status(201).json({
                        ok: true,
                        token,
                    });
            // if((lastDoc.time - currenTime) <= -2){
            //     console.log("holaa")

            //     const tokenSpotify= new Token({token,time:currenTime});
            //     await tokenSpotify.save();
            //     res.status(201).json({
            //         ok: true,
            //         token,
            //     });
            //   await Token.findOneAndDelete(lastDoc.id);

            // }else{
            //     res.status(201).json({
            //         ok: true,
            //         token:lastDoc.token
            //     })

            // }
           

           

            
           
        }

    });
}

module.exports = {
    renewToken
};