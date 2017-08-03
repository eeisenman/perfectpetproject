var data = localStorage.getItem("testJSON"); 


for (i = 0; i < data.length; i++) { 
    text += "<ul>" + "<h2>" + petName[i] + "<h2>" + "</ul>" + "<br>" + 
            "<ul>" + "<p>" + petType[i] + "<p>" + "</ul>" + "<br>" + 
            "<ul>" + "<p>" + petGender[i] + "<p>" + "</ul>" + "<br>" +   
            "<ul>" + "<p>" + petNeuter[i] + "<p>" + "</ul>" + "<br>" + 
            "<ul>" + "<p>" + petAge[i] + "<p>" + "</ul>" + "<br>" + 
            "<ul>" + "<p>" + petSize[i] + "<p>" + "</ul>" + "<br>" + 
            "<ul>" + "<p>" + extraOptions[i] + "<p>" + "</ul>" + "<br>" + 
            "<ul>" + "<img>" + photo[i] + "</img>" + "</ul>" + "<br>";
      


      
