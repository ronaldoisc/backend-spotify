
const generateToken=()=>{

 
    let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
        },
        form: { grant_type: 'client_credentials'},
        json: true
    };

     request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let token = body.access_token;
           
            return token; 
        }

    });

    

    
}

module.exports={
    generateToken
}