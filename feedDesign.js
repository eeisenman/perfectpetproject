var data = localStorage.getItem("testJSON"); 
var obj = JSON.parse(data);


var text = "<ul>";

for (i = 0; i < obj.length; i++) { 
    text += "<p>" + obj[i] + "</p>" 
}

text+= "</ul>";

document.getElementById('feed').innerHTML += text;
      
