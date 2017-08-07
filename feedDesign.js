var data = localStorage.getItem("testJSON"); 
var obj = JSON.parse(data);
console.log(obj);


var text = "<ul>";

for (i = 0; i < obj.length; i++) { 
    var pet = obj[i];
    text += "<div><img src=" + pet["photo"] + ">";
    text += "<div id = \"info\"> <p>" + "Name: " + pet["petName"] + "</b><br>";
    text += "Pet Gender: " + pet["petGender"] + "<br>";
    text +=  "Pet Type: " + pet["petType"] + "<br>";
    text += "Age: "+ pet["petAge"] + "<br>";
    text += "Size: " + pet["petSize"] + "<br>";
    text += "Neutered: " + pet["petNeuter"] + "</p></div></div>";
    
    
    
    
}

text+= "</ul>";

document.getElementById('feed').innerHTML += text;
      
