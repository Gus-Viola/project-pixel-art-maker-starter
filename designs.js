//$(document).ready(() => {

// Link gridRows and gridColumns to sizePicker
// Link colorInput to colorPicker
// Implement Function clearGrid

// When size is submitted by the user, call makeGrid()
let gridRows, gridColumns, colorInput;

//gridRows = $('#inputHeight').val();  //does  not work as it should
gridRows = 5;
gridColumns = 5;
colorInput = 'red';

$('#sizePicker').submit(  function() {  //unstable
    makeGrid(gridRows, gridColumns);

});


$('#mainButton').on('click', () => {
  makeGrid(gridRows, gridColumns);
});

//Single click paints TD with colorInput
$('body').on('click', 'td', function() {
  $(this).css('background-color', colorInput);
});

//Double Click paints TD white
$('body').on('dblclick','td', function() {
        $(this).css('background-color', 'white');
    });


function makeGrid(numRows, numColumns) {

  const grid = $('#pixelCanvas');

  for (let rows = 0; rows < numRows; rows++) {
    grid.append(`<tr class="row ${rows}"></tr>`);
    for (var columns = 0; columns < numColumns; columns++) {
      $("tr:last-child").append(`<td></td>`);
    };
  };
}
