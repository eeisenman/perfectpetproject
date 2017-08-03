var data = localStorage.getItem("testJSON"); 
obj = JSON.parse(text);


var text = "<ul>";

for (i = 0; i < obj.length; i++) { 
    text += "<p>" + obj[i] + "</p>" 
}

text+= "</ul>";

document.getElementById('feed').innerHTML += text;
      
