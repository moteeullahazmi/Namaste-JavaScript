function counter() {
    let count = 0;
    
    function increment() {
      count++;
      console.log(count);
    }
    
    return increment;
  }
  
  let myCounter = counter();
  myCounter(); // Output: ?
  myCounter(); // Output: ?