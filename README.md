# The bot is still under development. Please do not use it.

# New-Video-Notification-for-discord
This is a bot that uses youtube data V3 api and notifies you when a video get uploaded from a youtube chaannel.
if you still want to check the bot (with so bugs) this is the invite link: https://discord.com/api/oauth2/authorize?client_id=872408120364785754&permissions=3072&scope=bot

# Basic command(all-commands):
    !*help (it will answer with a message that contains all the commands and also a setup guide)
    
    !*update (after setup you can send this command so a request will be made a find out if a new video is uploaded instead of waiting 10min for the automatic request)
    
    !*sync (if you think there is a problem with the bot you can use this command so you will re-sync it).
    
    !*admin (probably this command will not be allow to be used from eveyone in the futere but for now you use it to bypass the setup procedure)
    !*setup (you have to use this in order for yout bot to work. After this command you should type "api_key= " and after the space you should type you google api   key)
    !*start (use it in order to start notification for every new video)

# Node_modules

    discord.js -> https://discord.js.org/#/,
    dotenv -> https://www.npmjs.com/package/dotenv,
    googleapis(optional) -> https://www.npmjs.com/package/googleapis,
    node-fetch -> https://www.npmjs.com/package/node-fetch,
    nodemon(optional) -> https://www.npmjs.com/package/nodemon

# So far the bot supports one channel only but in the future I will make it support miltiple channels

# Bugs so far:
          Sometimes the link is not working.
          Sometimes the bot does not respond at all, or it will send two times the same message.
       
# FAQ
    Q: Why sometimes the bot is not sending the notification the moment that the creator uploads a video?
    A: Because the bot is totally free and the free version of google api supports only 100 request per day , I can only send a request an hour.
