// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(UFOreport) {
    var row = tbody.append('tr');
    Object.entries(UFOreport).forEach(function([key, value]) {
        row.append('td').text(value);
    });
});


var inputfield = d3.select('.form-control').text();
var button = d3.select('#filter-btn');



function filterreport(){
    for (const [key, value] of Object.entries(UFOreport)) {
        console.log(`${key}: ${value}`);
      }
    
    console.log("A button was clicked!");
    console.log(d3.event.target);
    console.log(inputfield);
}  
button.on('click', filterreport);