// Omnitrix Dial Deeznuts by Reda Hmimchi 2020
// Deeznuts#9950

const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const client = new Discord.Client();
const bot = new Discord.Client({ disableEveryone: true });
const request = require("request");


client.once('ready', () => {
    console.log('sir 3llah');
});


client.on('message', message => {
client.user.setActivity("with Omnitrix | =help"); 

	if(message.content.startsWith("tfo")){
        message.channel.send("hh tfo 3la mok");
    }
    
	if(message.content.startsWith("uwu")){    
	message.channel.send("UwU ");}
	if(message.content.startsWith("kurt")){    
	message.channel.send("molat zabobi ");}
	if(message.content.startsWith("danzo")){    
	message.channel.send("mal danzo?");}
	if(message.content.startsWith("69")){    
        message.channel.send("Nicee");
    }	if(message.content.startsWith("UWU")){    
        message.channel.send("UwU ");
    }	if(message.content.startsWith("UwU")){    
        message.channel.send("OwO ");
    }
    if(message.content.startsWith("zaml")){  
        message.channel.send("bak li zaml ");
    }
    if(message.content.startsWith("97ba")){
        message.channel.send("mok li 97ba");
    }
    if(message.content.startsWith("chof")){
        message.channel.send("hh chof li y7wik");
    }
    if(message.content.startsWith("fin")){
        message.channel.send("fkrk");
    }
    if(message.content.startsWith("zbi")){
        message.channel.send("hh zbi fkrk");
    }   
    
        if (message.content.startsWith("=img")) {
  let splitWord = message.toString().split(" ");
  let searchWrd = "";
  let googKey = "AIzaSyCLt8lIIvgmAy7zVOf9bhdf2k1C1cEm32g";
  let cxKey = "4cdf7621770c18e9d";

  // Loop through incase of multiple word search
  for (var i = 1; i < splitWord.length; i++) {
    if (i > 1) {
      searchWrd = searchWrd + " ";
    }

    searchWrd = searchWrd + splitWord[i];
  }

  let page = 1;

  request(
    "https://www.googleapis.com/customsearch/v1?key=" +
      googKey +
      "&cx=" +
      cxKey +
      "&q=" +
      searchWrd +
      "&searchType=image&alt=json&num=10&start=" +
      page,
    function(err, res, body) {
      let data;

      try {
        data = JSON.parse(body);
      } catch (error) {
        console.log(error);
        return;
      }

      if (!data) {
        console.log(data);
        message.channel.send("Error:\n" + JSON.stringify(data));
        return;
      } else if (!data.items || data.items.length == 0) {
        console.log(data);
        message.channel.send("Oups! no result for : " + searchWrd);
        return;
      }
      // Get random number
      let ranNum = Math.floor(Math.random() * data.items.length);
      let randResult = data.items[ranNum];
      const embed = {
        title: "Results for: " + searchWrd,
        description: randResult.title,
        color: 1014292,
        image: {
          url: randResult.link
        },
        author: {
          name: message.author.tag,
          icon_url: message.author.displayAvatarURL
        },
      };
      message.channel.send({ embed });
    }
  );
}
	
	
if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift(); 
	
	if (message.content.startsWith(config.prefix + "help")) {
	   let embed = new Discord.RichEmbed()
	   .setTitle('Omnitrix dial Deeznuts Commands:')
	   .setColor('#16C101')
	   .setAuthor(message.author.tag)
	   .setDescription('For **Omnitrix Random Alien** type : `=omnitrix`\n For **Random Cursed Image** type: `=cursed`\n For **Avatar** type : `=avatar [mention user]`\n For **Bot Link** type : `=invite`\n For **Bot\'s Ping** type : `=ping` \n For **Image Search** type : `=img`')
	   .setThumbnail('https://cdn.discordapp.com/avatars/784898160144416778/b47a78829bde7e1430d5c4c357e24431.png?size=1024')
	   .setFooter('If you have any issue please contact: Deeznuts#9950','https://cdn.discordapp.com/avatars/784898160144416778/b47a78829bde7e1430d5c4c357e24431.png?size=1024')
       message.channel.send(embed)
	}
	
	 if (message.content.startsWith(config.prefix + 'avatar' && config.prefix + 'av')) {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
        .setColor('#16C101')
        .setAuthor(user.username + '\'s Avatar')
        .setImage(user.avatarURL)
		.setFooter('Resqueted By : ' + message.author.tag)
    message.channel.send(avatarEmbed);
}
	
	if (message.content.startsWith(config.prefix + "invite")) {
      let embed = new Discord.RichEmbed()
      .setColor('#16C101')
	  .setTitle('L\'Omnitrix bot Discord invite :')
	  .setDescription("https://discord.com/oauth2/authorize?client_id=784898160144416778&scope=bot&permissions=314368")
	  .setThumbnail('https://cdn.discordapp.com/avatars/784898160144416778/b47a78829bde7e1430d5c4c357e24431.png?size=1024')
	  .setFooter('Resqueted by' + message.author.tag)
	  message.channel.send(embed)
	}
	
	
	if(command === "ping"){
     let embed = new Discord.RichEmbed()
    .setColor('#16C101')
	.setTitle('ping pong ching chong')
	.setDescription(`Latency is **${Date.now() - message.createdTimestamp}ms**`) 
	.setFooter('Resqueted By : ' + message.author.tag)
    message.channel.send(embed);
    };
	

    var number = -1; 
    var folder = -1; 
	
    if (command === "omnitrix") {

         number = 18;
         imageNumber = Math.floor(Math.random() * number) + 1; 
		 message.channel.send(({files: ["./omnitrix//" + imageNumber + ".png"]}))
      }; 
 
     
	 
	 if (command === "cursed") {
   {
         number = 456;
         imageNumber = Math.floor(Math.random() * number) + 1; 
		 message.channel.send(({files: ["./cursed//" + imageNumber + ".png"]}))
      }; 
 
    } 

});

client.login(config.token);
