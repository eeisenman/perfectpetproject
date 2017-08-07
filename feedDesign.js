var data = localStorage.getItem("testJSON"); 
var obj = JSON.parse(data);
console.log(obj);


var text = "<ul>";

for (i = 0; i < obj.length; i++) { 
    var pet = obj[i];
    text += "<img src=" + pet["photo"] + ">";
    text += "<center><li><b>" + pet["petName"] + "<b></li></center><br>";
    text += "<li>" + pet["petType"] + "</li><br>";
    text += "<li>" + pet["petAge"] + "</li><br>";
    text += "<li>" + pet["petSize"] + "</li><br>";
    text += "<li>" + pet["petNeuter"] + "</li><br>";
    
    
    
    
}

text+= "</ul>";

document.getElementById('feed').innerHTML += text;
      
