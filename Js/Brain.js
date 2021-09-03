var text = ["Jeet Kaushik", "जीत कौशिक", "جیت کوشک۔"];
var counter = 0;
var elem = document.getElementById("heading-text"); //heading id
var inst = setInterval(change, 800);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}