var data = localStorage.getItem("testJSON"); 
var obj = JSON.parse(data);
console.log(obj);


var text = "<ul>";

for (i = 0; i < obj.length; i++) { 
    var pet = obj[i];
    text += "<img src=" + pet["photo"] + ">
    text += "<h3>" + pet["petName"] + "</h3>";
    text += "<li>" + pet["petType"] + "</li>";
    text += "<li>" + pet["petAge"] + "</li>";
    text += "<li>" + pet["petSize"] + "</li>";
    text += "<li>" + pet["petNeuter"] + "</li>";
    
    
    
    
}

text+= "</ul>";

document.getElementById('feed').innerHTML += text;
      
