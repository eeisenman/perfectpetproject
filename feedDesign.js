var data = localStorage.getItem("testJSON"); 
var obj = JSON.parse(data);
console.log(obj);


var text = "";

for (i = 0; i < obj.length; i++) { 
    var pet = obj[i];
    text += "<tr><td><img src=" + pet["photo"] + "></td>";
    text += "<td> <p>" + "Name: " + pet["petName"] + "<br>";
    text += "Pet Gender: " + pet["petGender"] + "<br>";
    text +=  "Pet Type: " + pet["petType"] + "<br>";
    text += "Age: "+ pet["petAge"] + "<br>";
    text += "Size: " + pet["petSize"] + "<br>";
    text += "Neutered: " + pet["petNeuter"] + "</p></td></tr>";
    
    
    
    
}

text+= "</ul>";

document.getElementById('feed').innerHTML += text;
      
