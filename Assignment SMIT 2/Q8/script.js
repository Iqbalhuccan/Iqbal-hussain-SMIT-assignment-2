function saveAndRetrieve() {
    // create an object
    var person = {
      name: "John",
      age: 30,
      city: "New York"
    };
  
    // save each property to localStorage
    for (var key in person) {
      localStorage.setItem(key, person[key]);
    }
  
    // retrieve the object from localStorage and return it as a new object
    var newPerson = {};
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      newPerson[key] = value;
    }
  
    // log the new object to the console
    console.log(newPerson);
}
  