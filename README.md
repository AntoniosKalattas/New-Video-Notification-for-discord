# New-Video-Notification-for-discord
This is a bot that uses youtube data V3 api and notifies you when a video get uploaded from a youtube chaannel. 

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
