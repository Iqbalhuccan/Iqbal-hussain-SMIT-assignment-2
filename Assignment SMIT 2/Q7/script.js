// Retrieve Object from LocalStorage Function
function getObjectFromLocalStorage(key) {
    const retrievedObject = localStorage.getItem(key);
    if (retrievedObject) {
      return JSON.parse(retrievedObject);
    } else {
      console.log(`No object with key '${key}' found in localStorage.`);
      return null;
    }
  }
  
  // Example Usage
  const myObj = { name: 'John', age: 30, city: 'New York' };
  localStorage.setItem('myKey', JSON.stringify(myObj));
  const retrievedObj = getObjectFromLocalStorage('myKey');
  console.log(retrievedObj);
  