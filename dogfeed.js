console.log("loading");

var nick = [
  "Bubbles",
  "Buttercup",
  "Fluffy",
  "Bear", 
  "Flash",
  "Fawn",
  "Bolt",
  "Woody",
  "Milo" ]; 
  
var gender = ["female", "male"]; 

var age = [
  "7 months",
  "5 weeks",
  "1 year old",
  "3 years old",
  "4 years old",
  "4 years old", 
  "3 years old",
  "6 years old", 
  "1 year old"];

var breed = [
  "unknown",
  "mix",
  "Corgi",
  "Samoyed", 
  "Husky",
  "Labrador", 
  "Pug", 
  "Golden Retriever", 
  "Beagle"]; 

var text = "<ul>";

var neutered = ["neutered", "unneutered"] 

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
  "unknowndog.jpeg",
  "mixdog.jpg",
  "corgi.jpg",
  "samoyed.jpg",
  "husky.jpeg",
  "lab.jpeg",
  "pug.jpeg",
  "goldie.jpeg",
  "beagle.jpeg"]; 

  
  

var g = 0;
var h = 0;
var i = 0;
var j= 0;
var k= 0; 

for (g = 0, h = 0, i=0, j=0, k=0; g < photo.length && h < nick.length && i < age.length && j < breed.length && k < personality.length ; g++, h++, i++, j++, k++){

var randomGender = gender[Math.floor(Math.random() * gender.length)];
var randomNeutered = neutered[Math.floor(Math.random() * neutered.length)];
  
    text += "<img src =\"" + photo[g] + "\" width:50% height: 50% />" + "<br>" +
            "<li> Name: " + nick[h] + "</li>" +  "<br>" +
            "<li>" + randomGender + " </li>" + "<br>" +
            "<li> Age: " + age[i] + "</li>" + "<br>" +
            "<li> Breed: " + breed[j] + "</li>" + "<br>" +
            "<li>" + randomNeutered + "</li>" + "<br>" +
            "<li> Personality: " + personality[k] + "</li>" + "<br>";
}   
text+= "</ul>";

console.log(text); 

