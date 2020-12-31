// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach(function(UFOreport) {
    var row = tbody.append('tr');
    Object.entries(UFOreport).forEach(function([key, value]) {
        row.append('td').text(value);
    });
});


var inputfield = d3.select('#datetime');
var button = d3.select('#filter-btn');



function filterreport(){
    console.log(d3.event.target);
}
inputfield.on("enter", filterreport);  
button.on('click', filterreport);