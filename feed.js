alert("Working"); 

var dummyData = 
[

  {"petName" : "Bubbles", 
   "petType" : "Dog", 
   "petGender" : "Female", 
   "petNeuter" : "Yes", 
   "petAge" : "Young/Newborn",
   "petSize" : "Medium", 
   "extraOptions" : [], 
   "photo" : "unknowndog.jpeg" 
  },
  
  {"petName" : "Chewy and Bear", 
   "petType" : "Dog", 
   "petGender" : "Female", 
   "petNeuter" : "Yes", 
   "petAge" : "Young/Newborn",
   "petSize" : "Small", 
   "extraOptions" : [], 
   "photo" : "mixdog.jpg" 
  },
  
  {"petName" : "Mikey", 
   "petType" : "Dog", 
   "petGender" : "Male", 
   "petNeuter" : "Yes", 
   "petAge" : "Young/Newborn",
   "petSize" : "Small", 
   "extraOptions" : [], 
   "photo" : "corgi.jpg" 
  },

  {"petName" : "Flash", 
   "petType" : "Dog", 
   "petGender" : "Female", 
   "petNeuter" : "Yes", 
   "petAge" : "Middle-aged",
   "petSize" : "Large", 
   "extraOptions" : [], 
   "photo" : "samoyed.jpg" 
  },

  {"petName" : "Woody and Buzz Lightyear", 
   "petType" : "Dog", 
   "petGender" : "Male", 
   "petNeuter" : "Yes", 
   "petAge" : "Middle-aged",
   "petSize" : "Large", 
   "extraOptions" : [], 
   "photo" : "husky.jpeg" 
  },

  {"petName" : "Rocky", 
   "petType" : "Dog", 
   "petGender" : "Male", 
   "petNeuter" : "Yes", 
   "petAge" : "Old",
   "petSize" : "Large", 
   "extraOptions" : [], 
   "photo" : "lab.jpeg" 
  },

  {"petName" : "Pumpkin", 
   "petType" : "Dog", 
   "petGender" : "Female", 
   "petNeuter" : "Yes", 
   "petAge" : "Middle-aged",
   "petSize" : "Small", 
   "extraOptions" : [], 
   "photo" : "pug.jpeg" 
  },

  {"petName" : "Max", 
   "petType" : "Dog", 
   "petGender" : "Male", 
   "petNeuter" : "Yes", 
   "petAge" : "Middle-aged",
   "petSize" : "Large", 
   "extraOptions" : [], 
   "photo" : "goldie.jpg" 
  },

  {"petName" : "Fawn", 
   "petType" : "Dog", 
   "petGender" : "Male", 
   "petNeuter" : "Yes", 
   "petAge" : "Old",
   "petSize" : "Medium", 
   "extraOptions" : [], 
   "photo" : "beagle.jpeg" 
  },

  {"petName" : "Briggy", 
   "petType" : "Cat", 
   "petGender" : "Male", 
   "petNeuter" : "No", 
   "petAge" : "Young/Newborn",
   "petSize" : "Small", 
   "extraOptions" : [], 
   "photo" : "unknowncat.jpg" 
  },
  
  {"petName" : "Oscar", 
   "petType" : "Cat", 
   "petGender" : "Male", 
   "petNeuter" : "Yes", 
   "petAge" : "Middle-aged",
   "petSize" : "Small", 
   "extraOptions" : [], 
   "photo" : "mainecat.jpg" 
  },
  
  {"petName" : "Kai", 
   "petType" : "Cat", 
   "petGender" : "Male", 
   "petNeuter" : "Yes", 
   "petAge" : "Middle-aged",
   "petSize" : "Medium", 
   "extraOptions" : [], 
   "photo" : "siamese.jpg" 
  },

  {"petName" : "Simba", 
   "petType" : "Cat", 
   "petGender" : "Male", 
   "petNeuter" : "Yes", 
   "petAge" : "Large",
   "petSize" : "Medium", 
   "extraOptions" : [], 
   "photo" : "persiancat.jpg" 
  },
  
  {"petName" : "Jade", 
   "petType" : "Cat", 
   "petGender" : "Male", 
   "petNeuter" : "Yes", 
   "petAge" : "Old",
   "petSize" : "Medium", 
   "extraOptions" : [], 
   "photo" : "britcat.jpg" 
  },

  {"petName" : "Tiger", 
   "petType" : "Cat", 
   "petGender" : "Female", 
   "petNeuter" : "Yes", 
   "petAge" : "Old",
   "petSize" : "Medium", 
   "extraOptions" : [], 
   "photo" : "mainecat2.jpg" 
  },

  {"petName" : "Lucy", 
   "petType" : "Cat", 
   "petGender" : "Female", 
   "petNeuter" : "Yes", 
   "petAge" : "Young/Newborn",
   "petSize" : "Medium", 
   "extraOptions" : [], 
   "photo" : "americancat.jpg" 
  },

  
  {"petName" : "Paris", 
   "petType" : "Cat", 
   "petGender" : "Male", 
   "petNeuter" : "Yes", 
   "petAge" : "Old",
   "petSize" : "Large", 
   "extraOptions" : [], 
   "photo" : "persiancat2.jpg" 
  },

  {"petName" : "Luna", 
   "petType" : "Cat", 
   "petGender" : "Female", 
   "petNeuter" : "Yes", 
   "petAge" : "Middle-aged",
   "petSize" : "Medium", 
   "extraOptions" : [], 
   "photo" : "bombaycat.jpg" 
  } 
  
  
];

var data = localStorage.getItem("testJSON"); 


if (data == null) { 
  var myJSON = JSON.stringify(dummyData);
  localStorage.setItem("testJSON", myJSON);
  alert(myJSON); 
}
  
