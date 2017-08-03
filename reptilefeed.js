console.log("loading");
var nick = [
  "Oatmeal",
  "Ollie",
  "Duke",
  "Bear", 
  "Kippling",
  "Luna",
  "Coco",
  "Woody",
  "Millie" ]; 
  
var gender = ["female", "male"]; 

var age = [
  "3 weeks",
  "1 month",
  "3 months",
  "6 months",
  "1 years old",
  "1.5 years old", 
  "2 years old",
  "2.5 years old", 
  "3 years old"];

var species = [
  "Snake",
  "Lizard",
  "Snake",
  "Turtle"
  "Lizard",
  "Iguana", 
  "Gecko", 
  "Turtle", 
  "Turtle"]; 

var text = "<ul>";

var personality = [ 
  "fun, energetic", 
  "friendly, happy",
  "calm, mellow", 
  "outgoing, friendly", 
  "loyal, confident", 
  "shy, quiet",
  "protective, alpha",
  "playful, kid friendly",
  "cheeky, funny"]; 

var photo = [
  
var g = 0;
var h = 0;
var i = 0;
var j= 0;
var k= 0; 

for (g = 0, h = 0, i=0, j=0, k=0; g < photo.length && h < nick.length && i < age.length && j < breed.length && k < personality.length ; g++, h++, i++, j++, k++){

var randomGender = gender[Math.floor(Math.random() * gender.length)];
  
    text += "<img src =\"" + photo[g] + "\" width:50% height: 50% />" + "<br>" +
            "<li> Name: " + nick[h] + "</li>" +  "<br>" +
            "<li>" + randomGender + " </li>" + "<br>" +
            "<li> Age: " + age[i] + "</li>" + "<br>" +
            "<li> Species: " + species[j] + "</li>" + "<br>" +
            "<li> Personality: " + personality[k] + "</li>" + "<br>";
}   
text+= "</ul>";

document.getElementById("dogData").innerHTML = text;


console.log(text); 



