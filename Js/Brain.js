var text = ["Hi", "नमस्ते", "Vaṇakkam", "Nǐ hǎo", "kēma chō"];
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

  console.log("%cCongratulations!! You found the EASTER EGG😁🙌🙌.", 'color: #0EE6B7; background: #11172B; font-size:32px; border-radius:4px')
}