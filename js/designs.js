let $gridRows, $gridColumns, $colorValue, $colorBackground;
const $grid = $('#pixelCanvas');

$colorBackground = $grid.css('background-color');

$('#sizePicker').submit(function(event) { //unstable
  //the submit button is for form admission, thus we need the line below
  //to avoid referencing to an unexisting admission website
  event.preventDefault();
  $gridRows = $('#inputHeight').val();
  $gridColumns = $('#inputWeight').val();
  makeGrid($gridRows, $gridColumns);
});

$('body').on('click', 'td', function() {
  $colorValue = $('#colorPicker').val();
  $(this).css('background-color', $colorValue);
});

//Double Click paints TD white
$('body').on('dblclick', 'td', function() {
  $(this).css('background-color', $colorBackground);
});

function makeGrid(numRows, numColumns) {

  $grid.empty(); //clears the grid

  for (let rows = 0; rows < numRows; rows++) {
    $grid.append(`<tr class="row ${rows}"></tr>`);
    for (var columns = 0; columns < numColumns; columns++) {
      $("tr:last-child").append(`<td></td>`);
    };
  };
}
