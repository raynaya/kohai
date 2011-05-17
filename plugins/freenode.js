module.exports = function(config) {
	var client = this 
	var auth = config.auth
	var whitelist = config.plugins.alias.whitelist
	if(config.auth) {
		auth = auth.freenode
		if(auth) {
			this.on("motd",function motd(){ 
				client.say("nickserv","identify "+auth.password)
                                console.log("Connected to freenode...")
                        })
                        this.on("message" + config.channels[0], function (from, message){
                                console.log(from, " : ", message)
                                var talkSmack = message.match(/\bbot\b/i)
                                var intro = message.match(/kohai:\sintroduce.*/i)
                                var tweet = message.match(/^!tweet\s/i)
                                if(tweet) {
                                    for (var i=0; i<whitelist.length; i++) {
                                        if (whitelist[i] == from) {
                                            re = /^!tweet\s(.{1,140})/;
                                            var tweetMatch = re.exec(message);
                                            twit.updateStatus(tweetMatch[1], function (data) {
                                                console.log("@" + data.user.screen_name + ": " + data.text)
                                            })
                                        }
                                    }
                                }
                                if(talkSmack) client.say(config.channels[0], "'Bot' is a derogatory term, and I'm offended.")
                                if(intro) client.say(config.channels[0], "I am Kohai, semi-useful communications-facilitating pseudointelligence!")
                                
                                
                                
                        })
		}
	}
}