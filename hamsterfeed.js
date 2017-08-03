console.log("loading");
var nick = [
  "Kiwi",
  "Whiskers", 
  "Teddy",
  "Bub",
  "Boots",
  "Cheeky",
  "Biscuit",
  "Snuggles",
  "Gem"]; 
  
var gender = ["female", "male"]; 

var age = [
  "3 weeks",
  "2 months",
  "4 months",
  "6 months",
  "9 months",
  "1 year old", 
  "12 months",
  "16 months", 
  "2 years old"];

var breed = [
  "Chinese",
  "Roborovski",
  "Syrian",
  "Campbell's Russian Dwarf", 
  "Winter White Russian Dwarf",
  "Chinese", 
  "Roborovski", 
  "Syrian", 
  "Winter White Russian Dwarf"]; 

var text = "<ul>";

var neutered = ["neutered", "not neutered"] 

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
  'chineseham1.jpg", 
  "rham1.jpg",
  "syrianham.jpg",
  "rham1.jpg",
  "winterwhiteham.jpg",
  "chineseham2.jpg",
  "rham2.jpg",
  "syrianham3.jpg",
  "winterwhiteham2.jpg"]; 

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

document.getElementById("dogData").innerHTML = text;


console.log(text); 



