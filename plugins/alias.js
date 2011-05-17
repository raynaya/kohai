module.exports = function (config) {

    var client = this
    var whitelist = config.plugins.alias.whitelist
    client.triggers = {
                            "insult" : function (message) {
                                    client.say(config.channels[0], "You," + message + ", are a quite nonsensical dallywhacker!")
                                },
        
                            "gtfo" : function () { process.exit() }
                      }
    client.on("message",function triggerListener(name,to,message) {
            for (var i=0; i<whitelist.length; i++) {
                if (whitelist[i] == name) {
                    var trigger_match = message.match(/^[!](\S+)(.*|$)?/)
                    if(trigger_match) {
                            var trigger = trigger_match[1]
                            
                            var handler = client.triggers[trigger]
                            if(handler) {
                                    var args = arghelper(trigger_match[2])
                                    handler.apply(client,[name,to,message].concat(args));
                            }
                    }
                }
            }
    })
 
 
 
 
 }