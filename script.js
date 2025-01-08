let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let middleBox= document.getElementById("middle")
let leftBox = document.getElementById("left");
for (lis of lists) {
  lis.addEventListener("dragstart", function (e) {
    let selected = e.target;
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null;
    });
    middleBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    middleBox.addEventListener("drop", function (e) {
      middleBox.appendChild(selected);
      selected = null;
    });
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
