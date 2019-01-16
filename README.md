![](https://i.imgur.com/PLO7QFp.png)
# UpdateMe-ReactNative
Mobile front end component of the UpdateMe system.<br/>
<br/>
UpdateMe is an application to deliver you the activity of your favourite Youtuber/Livestreamer from different social media platforms
under one simple interface. Gone are the days of bouncing between different applications just to get caught up.

*Check out the [UpdateMe-SpringBoot](https://github.com/bodn/UpdateMe-SpringBoot) back end component*

## Setup
  *You must have [Node.js](https://nodejs.org/en/) installed on your computer and the Expo Client([iOS](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_CA))* installed on your mobile device
  
  1. Clone repository using Git Bash or Terminal
  2. Change the working directory to `cd UpdateMe-ReactNative\UpdateMe`
  3. Run the following commands
      1. `npm install -g react-navigation`
      2. `npm install`
  4. Open global.js located in `UpdateMe\src\config`
      1. If you have the UpdateMe backend deployed locally change the value of global.backendAddress to your localhost:8080
      2. If you **DO NOT** have the UpdateMe deployed locally change the value to `global.backendAddress=http://updateme.stevenbodn.ca:8080` to connect to the Digital Ocean system
  5. Finally with your working directory the same as the working directory in step **2** launch the application by typing<br/>
  `expo start` into the terminal
  
  
## Screens

| Profile Screen        | Main Page           | 
| ------------- |-------------| 
|<img src="https://i.imgur.com/qsoQius.jpg " data-canonical-src="https://i.imgur.com/qsoQius.jpg " width="300" height="640" />| <img src="https://i.imgur.com/8TQVw8U.jpg" data-canonical-src="https://i.imgur.com/8TQVw8U.jpg " width="300" height="640" />| 

## Structure
* assets - the applications fonts, and icons that are used throughout the application
* components - small React Native items that are reused across pages, i.e the Header
* config - global variables and animations
* screens - the scripts that contain the components and functionality of the page
* utils - holds the functions that help with formatting data


## To do
- [ ] Remove redundant folders and unused scripts
- [ ] Create Timeout/Error
- [ ] Sync with Twitter API

*if you are interested in seeing architecture and dynamic views of the system please feel free to contact me :)*
