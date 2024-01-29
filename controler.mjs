import client from "./whatapi/server.js";
import main from   "./chatgpt-chatbot-main/index.js"



// Use the main function

async function runApp(input) {
  try {
    const userInput = input; 
    console.log('User Input:', userInput);

 
    return await main(userInput);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

 

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');

});

 client.on('message', async (message) => {
  
    


if(message.type == 'chat')
{

 if(message.from == '918602798990@c.us' || message.from == '918085339733@c.us')
 {

    var  value =  await runApp(message.body);

   message.reply(value);
 }

 

}



     
    
});



client.initialize();