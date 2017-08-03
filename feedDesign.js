var data = localStorage.getItem("testJSON"); 


var text = "<ul>";

for (i = 0; i < data.length; i++) { 
    text += "<h2>" + petName[i] + "</h2>" + "<br>" + 
            "<p>" + petType[i] + "</p>" + "<br>" + 
            "<p>" + petGender[i] + "</p>" + "<br>" +   
            "<p>" + petNeuter[i] + "</p>" + "<br>" + 
            "<p>" + petAge[i] + "</p>" + "<br>" + 
            "<p>" + petSize[i] + "</p>" + "<br>" + 
            "<p>" + extraOptions[i] + "</p>" + "<br>" + 
            "<img>" + photo[i] + "</img>" + "<br>";
}

text+= "</ul>";


      
