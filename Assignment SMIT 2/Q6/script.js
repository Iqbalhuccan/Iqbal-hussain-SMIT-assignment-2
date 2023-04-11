function saveObject() {
    const key = "myObject"; // key to use for storing the object
    const objectToStore = { // object to store
      name: "John",
      age: 30,
      email: "john@example.com"
    };
    localStorage.setItem(key, JSON.stringify(objectToStore)); // convert object to string and save to local storage
  }

  
  