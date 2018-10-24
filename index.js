/*
Author :: Ryan Wilson
Purpose :: Deletes all Twilio channels in a given service id

*/


require('dotenv').config({path:__dirname+'/.env'});
const accountSid = process.env.TWILIO_ACCOUNTID;
const serviceID = process.env.TWILIO_SERVICEID;
const authToken = process.env.TWILIO_AUTH_TOKEN;


const client = require('twilio')(accountSid, authToken);

function main(){
    //listAllChannels();
    deleteAllChannels();
    console.log("All Channels in given service are now deleted!");
    }
    
    function listAllChannels(){
        client.chat.services(serviceID).channels.each(channel => console.log(channel));
    }

    function deleteAllChannels(){
     client.chat.services(serviceID).channels.each(channel => channel.remove());
    }

  


main();

