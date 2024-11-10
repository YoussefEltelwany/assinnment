
var options = ["Beware of what you become in pursuit of what you want." , "Its not what happens to you, but how you react to it that matters." ,"The best revenge is massive success." , "Resentment is like drinking poison and waiting for your enemies to die."]
var option2 = ["--Jim Rohn", "--Epictetus" , "--Frank Sinatra" , "--Nelson Mandela"];



function generateRandomNum() {
   var num = Math.floor(Math.random() * options.length);
   document.getElementById("quote").innerHTML = options[num];
   document.getElementById("author").innerHTML = option2[num];
}