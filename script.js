// /* ===============================Chapter 14-16: Arrays===============================*/


// // Q1.
// let students1 = [];

// // Q2.
// let students2 = new Array();


// // Q3
// let fruits = ["Apple", "Banana", "Mango"];

// // Q4. 
// let numbers = [10, 20, 30, 40];

// // Q5.
// let flags = [true, false, true];

// // Q6.
// let mixedArray = ["ahmed", 25, true];

// //Q7.
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

// alert(" Qualifications in Pakistan:");
// for (let i = 0; i < qualifications.length; i++) {
//   alert(`${i + 1}) ${qualifications[i]}`);
// }
// console.log(qualifications );

// // 8. Student names, scores & percentage
// let studentNames = ["muhammad", "Ahmed", "arhum"];
// let scores = [420, 380, 450];
// let totalMarks = 500;

// alert("Student Scores and Percentages:");
// for (let i = 0; i < studentNames.length; i++) {
//   let percentage = (scores[i] / totalMarks) * 100;
//   alert(
//     `Score of ${studentNames[i]} is ${scores[i]}. Percentage: ${percentage}%`
//   );
// }


// // Q9. Colors Array Operations
// let colors = ["Red", "Green", "Blue"];
// alert(`Colors :${colors}`);

// //Case 1: Add color at beginning

// let addBegin = prompt("Enter color to add at beginning:");
// colors.unshift(addBegin);
// alert(`After adding at beginning: ${colors}`);

// //Case 2: Add color at end
// let addEnd = prompt("Enter color to add at end:");
// colors.push(addEnd);
// alert(`After adding at end: ${colors}`);

// //Case 3: Add two colors at beginning
// colors.unshift("Purple", "Yellow");
// alert(`After adding two at beginning: ${colors}`);

// //Case 4: Delete first color
// colors.shift();
// alert(`After deleting first color: ${colors}`);

// //Case 5: Delete last color
// colors.pop();
// alert(`After deleting last color: ${colors}`);

// // Case 6: Add color at desired index
// let addIndex = +prompt("Enter index to add color:");
// let addColor = prompt("Enter color name:");
// colors.splice(addIndex, 0, addColor);
// alert(`After adding at index: ${colors}`);

// // Case 7: Delete color(s) at desired index
// let delIndex = +prompt("Enter index to delete color(s):");
// let delCount = +prompt("How many colors to delete?");
// colors.splice(delIndex, delCount);
// alert(`After deletion: ${colors}`);


// // Q10.
// let scoresSort = [320, 230, 480, 120];
// scoresSort.sort(function (a, b) {
//   return a - b;
// });
// alert(`Sorted Scores:${scoresSort}`);

// // Q11.
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(2, 4);

// alert(`Cities:${cities}`);
// alert(`Cities:${cities}`);
// alert(`Selected Cities:${selectedCities}`);


// // Q12.
// let arr = ["This ", "is ", "my ", "cat"];
// let sentence = arr.join("");
// alert(`Joined String:${sentence}`);


// // Q13.
// let fifo = [];
// fifo.push("Keyboard");
// fifo.push("Mouse");
// fifo.push("Printer");

// alert("<h3>FIFO:</h3>");
// alert(fifo.shift());
// alert(fifo.shift());
// alert(fifo.shift());


// // Q14.  
// let lifo = [];
// lifo.push("Keyboard");
// lifo.push("Mouse");
// lifo.push("Printer");

// alert("<h3>LIFO:</h3>");
// alert(lifo.pop());
// alert(lifo.pop());
// alert(lifo.pop());


 // // Q15. 

// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// let html = "<h3>Phone Manufacturers</h3><select>";

// for (let i = 0; i < manufacturers.length; i++) {
//   html += `<option>${manufacturers[i]}</option>`;
// }

// html += "</select>";

// document.getElementById("container").innerHTML = html;