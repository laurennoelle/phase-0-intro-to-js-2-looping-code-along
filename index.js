// Code your solutions in this file
function writeCards(name, events) {
  const messages = [ ];
  for(let i = 0; i < name.length; i++) {
    let events = `Thank you, ${name[i]}, for the wonderful surprise gift!`
    messages.push(events)
  }
  return messages;
}


function countDown(i) {
  while(i >= 0) {
    console.log(i);
    i-=1;
  }
}
