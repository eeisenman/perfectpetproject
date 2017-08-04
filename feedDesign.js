var data = localStorage.getItem("testJSON"); 
var obj = JSON.parse(data);
console.log(obj);


var text = "<ul>";

for (i = 0; i < obj.length; i++) { 
    var pet = obj[i];
    text += "<p>" + pet["petName"] + "</p>" 
}

text+= "</ul>";

document.getElementById('feed').innerHTML += text;
      
