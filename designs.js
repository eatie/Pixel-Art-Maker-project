(function() {
//declaring strict mode
  'use strict';
//set global variables
  const $colorPicker = document.getElementById("colorPicker");
  const $sizePicker = document.getElementById("sizePicker");
  const $table = document.getElementById("pixel_canvas");
//add event listner to pick the grid size
  $sizePicker.addEventListener('submit', function() {
//stopping page from refreshing on submit
    event.preventDefault();
//input grid size data
    let width = document.getElementById("input_width").value;
    let height = document.getElementById("input_height").value;
    makeGrid(width, height);
  })
//funtion to change the color of the grid cell to selection
  function changeColor() {
    this.style.background = $colorPicker.value;
  }
//making the grid with input data and change to new grid cell color on clicking
  function makeGrid(width, height) {
    $table.innerHTML = '';
    for (let row = 0; row < width; row++) {
      let newRow = $table.insertRow();
        for (let cell= 0; cell < height; cell++ ) {
          let newCell = newRow.insertCell();
          newCell.onclick = changeColor;
        }
    }
  }

})();
