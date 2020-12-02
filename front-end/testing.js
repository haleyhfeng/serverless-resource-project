  //------------------------new feature we add to create require table
  // Builds the HTML Table out of myList.
  function buildHtmlTable(selector) {
    fetch('https://d7rlzfc25d.execute-api.us-east-2.amazonaws.com/dev/employees')
    .then(function (response) {
        return response.json();
      })
    .then(function (data) {
        console.log(data);
        
        var columns = addAllColumnHeaders(data,selector);
        
        for (var i = 0; i < data.length; i++) {
            var row$ = $('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
                var cellValue = data[i][columns[colIndex]];
                if (cellValue == null) {
                    cellValue = "";
                }
                if (colIndex == (columns.length -1)) {
                    content = "<button type='button' onclick='Apply("+cellValue+")'>Apply</button>"
                    row$.append($('<td/>').html(content));
                }
                else {
                    row$.append($('<td/>').html(cellValue))
                }    
              }
            $(selector).append(row$);
            }
        
       })
    .catch(function (err) {
        console.log('error: ' + err);
        });
}
// Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
  var columns = addAllColumnHeaders(myList, selector);

  for (var i = 0; i < myList.length; i++) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columns.length; colIndex++) {
      var cellValue = myList[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      row$.append($('<td/>').html(cellValue));
    }
    $(selector).append(row$);
  }
}
// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.
function addAllColumnHeaders(myList, selector) {
  var columnSet = [];
  var headerTr$ = $('<tr/>');

  for (var i = 0; i < myList.length; i++) {
    var rowHash = myList[i];
    for (var key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
      }
    }
  }
  $(selector).append(headerTr$);

  return columnSet;
}