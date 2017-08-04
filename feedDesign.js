var data = localStorage.getItem("testJSON"); 
var obj = JSON.parse(data);
console.log(obj);


var text = "<ul>";

for (i = 0; i < obj.length; i++) { 
    var pet = obj[i];
    text += "<p>" + pet["petName"] + "</p>"
    text += "<p>" + pet["petType"] + "</p>"
    text += "<p>" + pet["petAge"] + "</p>"
    text += "<p>" + pet["petSize"] + "</p>"
    text += "<p>" + pet["petNeuter"] + "</p>"
    text += "<img src=" + pet["photo"] + "/>"
}

text+= "</ul>";

document.getElementById('feed').innerHTML += text;
      
