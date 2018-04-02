
//$(document).ready(() => {
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
/*
var grid = makeGrid(10,10);

$('#mainButton').click($('#pixelCanvas').appendChild(grid););


$( "#mainButton" ).click(function() {
  alert( "Handler for .click() called." );
});


$("#mainButton").click(makeGrid(10,10)); */



$("#mainButton").on('click', () => {
  //$('#colorPicker').toggle();
  makeGrid(5,5);
}); 


function makeGrid(numRows, numColumns) {
  /*
  Function adapted from https://stackoverflow.com/questions/9140101/creating-a-clickable-grid-in-a-web-browser
  and from http://slavchoslavchev.com/tutorials/building-a-grid-matrix-in-javascript/
  and from https://codepen.io/nakessler/pen/qOdJWm
  */


  const grid = $('#pixelCanvas');

  for (let rows = 0; rows < numRows; rows++) {
    grid.append(`<tr class="row ${rows}"></tr>`);
            for (var columns = 0; columns < numColumns; columns++) {
            $("tr:last-child").append(`<td></td>`);
          };
      };
  }
/*
  for (let r=0;r<numRows;r++){
    tr = grid.append(`<tr></tr>`);
    for (let c=0;c<numColumns;c++){




      cell.addEventListener('click',(function(el,r,c,i){
        return function(){ callback(el,r,c,i); }
       })(cell,r,c,i),false);*/
  //  }
  //}


  //return grid;
  //alert( "function MakeGrid at the end." );
//}

//}
