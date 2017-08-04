var data = localStorage.getItem("testJSON"); 
var obj = JSON.parse(data);
console.log(obj);


var text = "<ul>";

for (i = 0; i < obj.length; i++) { 
    var pet = obj[i];
    text += "<div class="polaroid"><img src=" + pet["photo"] + ">";
    text += "<li>" + pet["petName"] + "</li></div><br>";
    text += "<li>" + pet["petType"] + "</li></div><br>";
    text += "<li>" + pet["petAge"] + "</li></div><br>";
    text += "<li>" + pet["petSize"] + "</li>v<br>";
    text += "<li>" + pet["petNeuter"] + "</li><br>";
    
    
    
    
}

text+= "</ul>";

document.getElementById('feed').innerHTML += text;
      
