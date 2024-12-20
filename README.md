# The Bot is Still Under Development
Please do not use it in its current state.

## New Video Notification for Discord
This is a bot that uses the YouTube Data API V3 to notify you whenever a new video is uploaded to a specific YouTube channel.  
If you still want to try the bot (with some bugs), here is the invite link:  
[Invite the Bot](https://discord.com/api/oauth2/authorize?client_id=872408120364785754&permissions=3072&scope=bot)

---

## Basic Commands (All Commands)
- **`!*help`**  
  Displays a message containing all available commands and a setup guide.

- **`!*update`**  
  Sends a manual request to check if a new video has been uploaded, rather than waiting for the automatic 10-minute update cycle.

- **`!*sync`**  
  Re-syncs the bot if you think there is an issue.

- **`!*admin`**  
  (Future Restricted Command) Currently allows you to bypass the setup procedure. In the future, this command may be limited to administrators only.

- **`!*setup`**  
  Required for the bot to work. After typing this command, follow it with:  
  `api_key= <your_google_api_key>`  
  Replace `<your_google_api_key>` with your actual Google API key.

- **`!*start`**  
  Starts the notification service for new videos.

---

## Node.js Modules
- [discord.js](https://discord.js.org/#/)  
- [dotenv](https://www.npmjs.com/package/dotenv)  
- [googleapis (optional)](https://www.npmjs.com/package/googleapis)  
- [node-fetch](https://www.npmjs.com/package/node-fetch)  
- [nodemon (optional)](https://www.npmjs.com/package/nodemon)

---

## Current Limitations
The bot currently supports notifications for **one YouTube channel only**. Future updates will include support for multiple channels.

---

## Known Bugs
1. Occasionally, the invite link may not work.  
2. Sometimes, the bot does not respond at all or sends duplicate messages.

---

## FAQ
**Q: Why doesn’t the bot send notifications immediately after a new video is uploaded?**  
**A:** The bot is free and operates under the limitations of the free version of the Google API, which supports only 100 requests per day. As a result, the bot can only send a maximum of 4 requests per hour.
