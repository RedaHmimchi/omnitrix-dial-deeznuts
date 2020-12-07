// Omnitrix Dial Deeznuts by Reda Hmimchi 2020
// Deeznuts#9950

const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const client = new Discord.Client();


client.once('ready', () => {
    console.log('sir 3llah');
});


client.on('message', message => {
client.user.setActivity("with Omnitrix | =help"); 

    
if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift();

    var number = -1; 
    var folder = -1; 
	
	if (message.content.startsWith(config.prefix + "help")) {
	   let embed = new Discord.RichEmbed()
	   .setTitle('Omnitrix dial Deeznuts Commands:')
	   .setColor('#16C101')
	   .setAuthor(message.author.tag)
	   .setDescription('For **Omnitrix random image** type : =omnitrix\n For **Random Cursed Images** type: =cursed\n For Bot **Link** type : =invite')
	   .setThumbnail('https://cdn.discordapp.com/avatars/784898160144416778/b47a78829bde7e1430d5c4c357e24431.png?size=1024')
	   .setFooter('If you have any issue please contact: Deeznuts#9950','https://cdn.discordapp.com/avatars/784898160144416778/b47a78829bde7e1430d5c4c357e24431.png?size=1024')
       message.channel.send(embed)
	}
	
	if (message.content.startsWith(config.prefix + "invite")) {
      let embed = new Discord.RichEmbed()
      .setColor('#16C101')
	  .setTitle('Omnitrix dial Deeznuts Discord invite :')
	  .setDescription("https://discord.com/oauth2/authorize?client_id=784898160144416778&scope=bot&permissions=314368")
	  .setThumbnail('https://cdn.discordapp.com/avatars/784898160144416778/b47a78829bde7e1430d5c4c357e24431.png?size=1024')
	  .setFooter('If you have any issue please contact: Deeznuts#9950','https://cdn.discordapp.com/avatars/784898160144416778/b47a78829bde7e1430d5c4c357e24431.png?size=1024')
	  message.channel.send(embed)
	}
	
    if (config.folder.includes(command)) {
        folder = config.folder.indexOf(command);

        fs.readdir('./' + config.folder[folder], (err, files) => {
            number = files.length;

            if (!args.length) {
                imageNumber = Math.floor(Math.random() * number) + 1;
            } else {
                imageNumber = args[0];

                if (imageNumber > number) { 
                    return message.channel.send("Possible arguments: " + config.prefix + command + " [1-" + number + "]."); 
                }
            }

            message.channel.send ({files: ["./" + config.folder[folder] + "\\" + imageNumber + ".png"]} )
        });
    } else if (command === "omnitrix") {

        folder = Math.floor(Math.random() * config.folder.length);
        fs.readdir('./' + config.folder[folder], (err, files) => {
         number = files.length;
         imageNumber = Math.floor(Math.random() * number) + 1; 
		 message.channel.send(({files: ["./" + config.folder[folder] + "\\" + imageNumber + ".png"]}))
      }); 
 
    } 
		
    if(message.content.includes("69"))
    {
        message.channel.send("Niiiiiiiiice")
    }
	
	
});

client.login(config.token);
