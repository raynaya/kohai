/*
 *
 * comments.js - Kohai's IRC auto-responses.
 *
 * (c) 2011 Nodejitsu Inc.
 *
 */

var comments = module.exports = function (data) {
  
  switch(true) {
    case /\bNixalBot2\b.*\bbot\b.*/i.test(data.text):
      this.emit('sendMsg', {
        dest: data.to, 
        msg: '\'Bot\' is a derogatory term, and I\'m offended.' 
      });
      break;

    case /\bNixalBot2\b.*\bmaster\b.*/i.test(data.text):
      this.emit('sendMsg', {
        dest: data.to, 
        msg: 'Raynaya is my master.I  answer only to him!' 
      });
      break;
 case /\bNixalBot2\b.*\bfuck\b.*/i.test(data.text):
      this.emit('sendMsg', {
        dest: data.to, 
        msg: 'Its a public forum dont use such words !' 
      });
      break;

 case /\bNixalBot2\b.*\bwho\b.*\bare\b.*\byou\b.*/i.test(data.text):
      this.emit('sendMsg', {
        dest: data.to, 
        msg: 'I am a semi-useful communications-facilitating  pseudointelligence!Ask me what i can do' 
      });
 break;
case /\bNixalBot2\b.*\bwhere\b.*\bare\b.*\bfrom\b.*/i.test(data.text):
      this.emit('sendMsg', {
        dest: data.to, 
        msg: 'None of your business !' 
      });
 break;
 case /\bNixalBot2\b.*\bhome\b.*/i.test(data.text):
      this.emit('sendMsg', {
        dest: data.to, 
        msg: 'I have a sweet home!But i wont answer this question' 
      });
 break;
case /\bNixalBot2\b.*\bwhat\b.*\bcan\b.*\byou\b.*/i.test(data.text):
      this.emit('sendMsg', {
        dest: data.to, 
        msg: 'I can kick someone out of this channel only if my master knows you !' 
      });
 break;

case /\bNixalBot2\b.*\bhello\b.*/i.test(data.text):
      this.emit('sendMsg', {
        dest: data.to, 
        msg: 'Hello! I am NixalBot2.Ask me what i can do'
      });
      break;

 case /\bNixalBot2\b.*\b\b.*/i.test(data.text):
      this.emit('sendMsg', {
        dest: data.to,
        msg: 'I dont understand you! Speak in Bankimi suddho bangla :D'
      });
      break;


    default:
      // This is the no-match case, do nothing.
      break;
  }

}
