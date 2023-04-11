addParagraph(text) {
    var newParagraph = document.createElement("p"); 
    // create a new paragraph element
    newParagraph.textContent = text; 
    // set the text content of the paragraph
    document.body.appendChild(newParagraph); 
    // append the paragraph to the body of the HTML document
  }
  