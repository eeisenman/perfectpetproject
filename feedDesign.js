var data = localStorage.getItem("testJSON"); 
var obj = JSON.parse(data);
console.log(obj);


var text = "<ul>";

for (i = 0; i < obj.length; i++) { 
    var pet = obj[i];
    text += "<img src=" + pet["photo"] + ">";
    text += "<center><li><b>" + "Name: " + pet["petName"] + "</b></li></center><br>";
    text += "<li>" + "Pet Gender: " + pet["petGender"] + "</li><br>";
    text += "<li>" + "Pet Type: " + pet["petType"] + "</li><br>";
    text += "<li>" + "Age: "+ pet["petAge"] + "</li><br>";
    text += "<li>" + "Size: " + pet["petSize"] + "</li><br>";
    text += "<li>" + "Neutered: " + pet["petNeuter"] + "</li><br>";
    
    
    
    
}

text+= "</ul>";

document.getElementById('feed').innerHTML += text;
      
