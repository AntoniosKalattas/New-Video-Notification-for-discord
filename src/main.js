require("dotenv").config();
const fetch=require("node-fetch")


let last_date;
let channel_name= new Array(1);
let dates = new Array(2);
let video_link=new Array(1);
let search1;
const api_key="";  //<- here write your google api key.
const url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxVDmCmgQMTUTWMeRZUYliw&maxResults=2&order=date&q=frutotrela&key=${api_key}`;
const { Client } = require("discord.js");
const { containeranalysis_v1alpha1 } = require("googleapis");
const client = new Client();


client.on("ready", () =>{
    fetch12();
});

function fetch12(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
    search1=JSON.stringify(data, null, 2);
    console.log(search1);
    new_vid();
    })
    .catch((err) =>{
        console.log(err);
    })
    
}

function new_vid(){
    let x=0;
    console.log("################################################################");
    for(let i=0; i<search1.length; i++){
        if(search1[i]=="s" && search1[i+1]=="n" && search1[i+2]=="i" && search1[i+3]=="p" && search1[i+4]=="p" && search1[i+5]=="e" && search1[i+6]=="t"){
            for(let j=i+36; j<i+46; j++){
                dates[x] = (dates[x] || "") + (search1[j] || "")
            }
            x++; 
        }
        if(search1[i]=="v" && search1[i+1]=="i" && search1[i+2]=="d" && search1[i+3]=="e" && search1[i+4]=="o" && search1[i+5]=="I" && search1[i+6]=="d"){
            let n;
            n=i+11;
            while(search1[n]!='"'){
                video_link[0] = (video_link[0] || "") + (search1[n] || "")
                n++;
            }
        }       
    }

    get_channel_name();

    console.log(dates[0]);
    console.log(last_date);
    client.on("message", (message) =>{
        if(message.content==="!start"){
            console.log("!start was activated");
            setInterval(() =>{
                if(last_date!=dates[0]){
                    last_date=dates[0];
                    message.channel.send(`New video/live from ${channel_name}`);
                    message.channel.send(`https://www.youtube.com/watch?v=${video_link[0]}`);
                }  
            },3600000); 
        }
    })                    
}



function get_channel_name(){
    for(let i=0; i<search1.length; i++){
        if(search1[i]=="c" && search1[i+1]=="h" && search1[i+2]=="a" && search1[i+3]=="n" && search1[i+4]=="n" && search1[i+5]=="e" && search1[i+6]=="l" && search1[i+7]=="T" && search1[i+8]=="i" && search1[i+9]=="t" && search1[i+10]=="l" && search1[i+11]=="e"){
            let e =i+16;
            while(search1[e]!='"'){
                channel_name[0]=(channel_name || "") + (search1[e] || "");
                console.log(channel_name[0]);
                e++;
            }
            break;
        }
    }
}

client.on("message", (message) =>{

    if(message.content==="!*help"){
        message.channel.send("prefix: !*");
        message.channel.send("commands:!*update")
        message.channel.send("!*update: by typing this you will be notified for any new video from frutotrela");
    }

    if(message.content==="!*update"){
        if(last_date!=dates[0]){
            last_date=dates[0];
            message.channel.send(`New video/live from ${channel_name}`);
            message.channel.send(`https://www.youtube.com/watch?v=${video_link[0]}`);
        }
        else{
            message.channel.send("Ο μεγαλιοτατος δεν εχει ανεβαση βιντεο!! Το τελευτεο λακταριστο βιντεο ειναι:");
            message.channel.send(`https://www.youtube.com/watch?v=${video_link[0]}`);
        }
    }
}) 

client.login(process.env.DISCORDJS_BOT_TOKEN);
