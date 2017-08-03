var data = localStorage.getItem("testJSON"); 


var text = "<ul>";

for (i = 0; i < data.length; i++) { 
    text += "<p>" + data[i] + "</p>" 
}

text+= "</ul>";

document.getElementById('feed').innerHTML += text;
      
