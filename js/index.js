// ##### ESEMPIO INTERAZIONE CELLE ##### 

// var allTableCells = document.getElementsByTagName("td");
// for(var i = 0, max = allTableCells.length; i < max; i++) {
//     var node = allTableCells[i];
//     //get the text from the first child node - which should be a text node
//     var currentText = node.childNodes[0].nodeValue; 
//     //check for 'one' and assign this table cell's background color accordingly 
//     if (currentText === "one") {
//       node.style.backgroundColor = "red";
//       console.log(currentText);
//     }
// }



// ##### ESEMPIO SENZA USARE JSON.PARSE() ##### 

// fetch('getJSON.pho')
//   .then(data => data.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   })