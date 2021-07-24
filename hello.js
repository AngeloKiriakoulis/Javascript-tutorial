//Setup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "054323",
    "likes": ["Pizza", "Coding", "Brownies"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "099437",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },{
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "048734",
    "likes": ["Intriguing Cases", "Violin"]
  },
];

function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++){
    if(contacts[i].firstName === name){
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

var data = lookUpProfile("Akira", "likes");
console.log(data);