require("dotenv").config();
const fetch=require("node-fetch")
const { Client, MessageCollector, Discord_} = require("discord.js");
const bot = require("discord.js");

let api_key= new Array(1);
let sa=0;
let last_date;
let channel_name= new Array(1);
let dates = new Array(2);
let video_link=new Array(1);
let search1;
var last_link=0;
var new_link;
const { containeranalysis_v1alpha1 } = require("googleapis");
const client = new Client();
const filter = m => m.content.includes('api_key: ');

function sync_fetch(){
    let url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxVDmCmgQMTUTWMeRZUYliw&maxResults=2&order=date&q=frutotrela&key=${api_key}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
    search1=JSON.stringify(data, null, 2);
    date();
    videoId();
    })
    .catch((err) =>{
        client.on("message", message =>{
            message.channel.send("Google api throw an error. Please check you API_KEY and twitter for any problem.");
        })
        console.log(err);
        return;
    })
}

function fetch12(){
let url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxVDmCmgQMTUTWMeRZUYliw&maxResults=2&order=date&q=frutotrela&key=${api_key}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
    search1=JSON.stringify(data, null, 2);
    new_vid();
    })
    .catch((err) =>{
        client.on("message", message =>{
            message.channel.send("Google api throw an error. Please check you API_KEY and twitter for any problem.");
        })
        console.log(err);
        return;
    })
    
}

function new_vid(){
    sa++;
    console.log(sa);
    date();
    videoId();
    new_link=`https://www.youtube.com/watch?v=${video_link[0]}`;
    get_channel_name();
    client.on("message", (message) =>{
        if(message.content==="!*start"){
            console.log("!start was activated");
            message.channel.send("```From now on you will be notified.```")
            setInterval(() =>{
                if(last_date!=dates[0] && new_link!=last_link){
                    last_date=dates[0];
                    last_link=new_link;
                    message.channel.send(`New video/live from ${channel_name}`);
                    message.channel.send(new_link);
                }  
            },3600000); 
        }
    })                    
}

function date(){
    let x=0;
    for(let i=0; i<search1.length; i++){
        if(search1[i]=="s" && search1[i+1]=="n" && search1[i+2]=="i" && search1[i+3]=="p" && search1[i+4]=="p" && search1[i+5]=="e" && search1[i+6]=="t"){
            for(let j=i+36; j<i+46; j++){
                dates[x] = (dates[x] || "") + (search1[j] || "")
            }
            x++; 
        }
    }
}

function videoId(){
    for(let i=0; i<search1.length; i++){
        if(search1[i]=="v" && search1[i+1]=="i" && search1[i+2]=="d" && search1[i+3]=="e" && search1[i+4]=="o" && search1[i+5]=="I" && search1[i+6]=="d"){
            let n;
            n=i+11;
            while(search1[n]!='"'){
                video_link[0] = (video_link[0] || "") + (search1[n] || "")
                n++;
            }
        }       
    }
}

function get_channel_name(){
    for(let i=0; i<search1.length; i++){
        if(search1[i]=="c" && search1[i+1]=="h" && search1[i+2]=="a" && search1[i+3]=="n" && search1[i+4]=="n" && search1[i+5]=="e" && search1[i+6]=="l" && search1[i+7]=="T" && search1[i+8]=="i" && search1[i+9]=="t" && search1[i+10]=="l" && search1[i+11]=="e"){
            let e =i+16;
            while(search1[e]!='"'){
                channel_name[0]=(channel_name || "") + (search1[e] || "");
                e++;
            }
            break;
        }
    }
}

function set_up(){
    let x;
    client.on("message", message =>{
        let collector = new bot.MessageCollector(message.channel, filter);
        if(message.content==="!*setup"){
            collector.on('collect', (message, col) => {
                message.channel.send("```api key accepted, please continue with the command !*update and then use the command !*start, to start the notifications```");
                x=message.content;
                api_key=x.replace("api_key: ", '');
                fetch12();
            })
       }
    })
}

function sync(){
    sync_fetch();
    if(last_date!=dates[0] && new_link!=last_link){
        last_date=dates[0];
        last_link=new_link;
    }
    console.log("synced");
}


client.on("ready", () =>{
    set_up();
});

client.on("message", message =>{
    if(message.content==="!*help"){
        message.channel.send("prefix:```!*```");
        message.channel.send("Hello, I am frutotrelas bot. To set-up me just to ```!*setup``` and then enter the api key by typing ```api_key= type_here_your_api_key```. ");
        message.channel.send("commands:```!*update```")
        message.channel.send("!*update: by typing this you will be notified for any new video from frutotrela");
    }

    if(message.content==="!*update"){
        fetch12();
        if(last_date!=dates[0] && last_link!=new_link){
            last_date=dates[0];
            last_link=new_link;
            message.channel.send(`New video/live from ${channel_name}`);
            message.channel.send(new_link);
        }
        else{
            message.channel.send(`User ${channel_name}, has not upload anything new`);
            message.channel.send(new_link);
        }
    }
    if(message.content==="!*sync"){
        sync();
    }

}) 

client.login(process.env.DISCORDJS_BOT_TOKEN);
