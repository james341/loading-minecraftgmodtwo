/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "sleekLoad 2";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
        "image14.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "hHWMXtvx3BM", name: "Atlas  - Installation Music"},
	{youtube: "gdEuJ1hAVhQ", name: "Atlas  - Installation Music"},
        {youtube: "nQZ-5Fxn-vE", name: "Atlas  - Installation Music"},
        {youtube: "8a6z8MIMuU", name: "Atlas  - Installation Music"},
        {youtube: "eN7dYDYfvVg", name: "Atlas  - Installation Music"},
        {youtube: "Of0k-NFqC7E", name: "Atlas  - Installation Music"},
        {youtube: "lhenz0AdLqo", name: "Atlas  - Installation Music"},
        {youtube: "QxVGEM4VEK0", name: "Atlas  - Installation Music"},
        {youtube: "cjQQ9JYGgTM", name: "Atlas - Installation Music"},
        {youtube: "oBpvsSeBh54", name: "Atlas - Installation Music"},
        {youtube: "ZRineeKfZp0", name: "Atlas - Installation Music"},
        {youtube: "keC-XrYC1Z8", name: "Atlas - Installation Music"},
        {youtube: "blKsmOP6zro", name: "Atlas - Installation Music"},
        {youtube: "kPtWVYzC2vU", name: "Atlas - Installation Music"},
        {youtube: "la0-5QFLr14", name: "Atlas - Installation Music"},
        {youtube: "JTUCUqlwnpg", name: "Atlas - Installation Music"},

];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 15;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"If you have a suggestion for the server or if you believe there is something to improve on, create a thread on the forums!",
	"Do not spam. Spam: Excessively typing/saying/doing something repeatedly in quick succession!",
	"Breaking into someone's base can get you killed or arrested. Walking in, however, will get you killed or arrested after being asked to leave more than twice!",
        "Do not disconnect, suicide, change jobs, change names, etc. to get out of a roleplay/staff situation. This will result in a harsher or additional punishment!",
        "Mayors can not take away rights from players such as freedom of privacy. This means no laws saying that players can't lock their doors!",
        "No breaking NLR. You may not return to where you die for 5 minutes!",
        "Fear RP is in effect - respond to situations like you would in real life. For example, if someone pulls a gun on you and you are unarmed, you must follow their commands!", 
        "Do not no collide cameras and physgun them into other people's bases, this is known as camera abuse!",
        "Breaking into someone's base can get you killed or arrested. Walking in, however, will get you killed or arrested after being asked to leave more than twice!",
        "Do not failure RP!",
        "Please Don't be a dick to people. Being an 'edgy cool teenager' won't get you far on this server. You will be banned. Toxicity is not tolerated!",
        "Your Fading door has to be open longer than 5seconds!",
        "If you are told to stop, you stop. Make an appeal or report if you disagree with a decision!",
        "You need to listen to people that are higher rank than you. If that person is abusing their rank, let a staff member know!",
        "Do not involve yourself in situations especially admin situations which you are not apart of in the first place!",
        "Cheating will result in an automatic or manual permanent ban. This includes abusing Gmod/source exploits with client-side scripts and convars!",
        "You need to listen to people that are higher rank than you. If that person is abusing their rank, let a staff member know!",
        "We are a serious RP server. Consider being serious at all times but understand there may also be times when the server relaxes!",
        "No posting posts that other members have posted!",
        "It is the full responsibility of the warning originator to ensure all intended targets are aware of the warning outside the vicinity of their base (designated by the raidzone) should they ask in chat!",
        "Please take the server Seriously!",
        "Breaking into someone's base can get you killed or arrested. Walking in, however, will get you killed or arrested after being asked to leave more than twice!",
        "Please dont spam the sound sweps that come with your job!",
        "AFear RP is in effect - respond to situations like you would in real life. For example, if someone pulls a gun on you and you are unarmed, you must follow their commands!",
        "If we close down you will not get your money back and if we open up again you will no longer have the Vip packages!",
        "NLR (New life rule) is 3 minutes. Do not return to the place of death for that duration and you forget everything from your past life (including how you died and who killed you!",
        "Anyone caught baiting or encouraging others to violate rules will have an equal or greater punishment to the rule violation!"

];
/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
