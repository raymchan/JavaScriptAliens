// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(Date => Date.datetime === inputValue);

  console.log(filteredData);


//   filteredData.map(data => 
//   d3.select("#ufo-table") 
//        .append("tr")
//        .append("td").text(`${data.datetime}`);
//        .append("td").text(`${data.city}`);
//        .append("td").text(`${data.state}`);

    
  d3.select("tbody")
  .selectAll("tr")
  .data(filteredData)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td><td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}</td><td>${d.comments}</td>`;})
                   
//     .append("tr").text(`${data.datetime}`+"  "+`${data.city}`+"  "+`${data.state}`+"  "+`${data.country}`+"  "+`${data.shape}`+"  "+`${data.durationMinutes}`+"  "+`${data.comments}`)
//     .text(`${data.city}`).text(`${data.state}`).text(`${data.country}`)
//     .text(`${data.shape}`)
//     .append("td").text(`${data.durationMinutes}`)
//     .append("td").text(`${data.comments}`)
//   );
    
});

