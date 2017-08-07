var data = localStorage.getItem("testJSON"); 
var obj = JSON.parse(data);
console.log(obj);


var text = "<ul>";

for (i = 0; i < obj.length; i++) { 
    var pet = obj[i];
    text += "<img src=" + pet["photo"] + ">";
    text += "<div id = \"info\"> <li><b>" + "Name: " + pet["petName"] + "</b></li>";
    text += "<li>" + "Pet Gender: " + pet["petGender"] + "</li>";
    text += "<li>" + "Pet Type: " + pet["petType"] + "</li>";
    text += "<li>" + "Age: "+ pet["petAge"] + "</li>";
    text += "<li>" + "Size: " + pet["petSize"] + "</li>";
    text += "<li>" + "Neutered: " + pet["petNeuter"] + "</li></div>";
    
    
    
    
}

text+= "</ul>";

document.getElementById('feed').innerHTML += text;
      
