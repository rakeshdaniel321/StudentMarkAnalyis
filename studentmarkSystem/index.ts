function processNotification(user:string,sendmsgcallback:(msg:string)=>void){
const message = `Hello ${user}, you have a new notification!`;
sendmsgcallback(message);
}
function sendMessage(msg:string){
    console.log(msg);
}
processNotification("Rakesh",sendMessage);