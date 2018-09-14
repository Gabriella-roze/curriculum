// Select Parent
const parentText1 = document.querySelector(".text1");
const parentText2 = document.querySelector(".text2");
const parentText3 = document.querySelector(".text3");
const parentText4 = document.querySelector(".text4");
const parentTextExam = document.querySelector(".text_exam");

// Copy the Template
const templateArticle = document.querySelector("#tpl").content;

window.addEventListener("load", ()=>{
  fetch("data.json")
    .then(result=>result.json())
    .then(data=>{
      showText1(data);
      showText2(data);
      showText3(data);
      showText4(data);
      showTextExam(data);
    })
});

function showText1(data) {
  // Clone and Edit
  //console.log(data.contentOfProgramme[0].paragraph[0].paragraph);
  let cloneArticle = templateArticle.cloneNode(true);
  cloneArticle.querySelector("h2").innerHTML = data.contentOfProgramme[0].paragraph[0].name;
  cloneArticle.querySelector("p").innerHTML = data.contentOfProgramme[0].paragraph[0].paragraph;
  cloneArticle.querySelector("h3").innerHTML = data.contentOfProgramme[0].paragraph[1].name;
  cloneArticle.querySelector(".extra").innerHTML = data.contentOfProgramme[0].paragraph[1].paragraph;
  // Append child
  parentText1.appendChild(cloneArticle);
}
function showText2(data) {
  // Clone and Edit
  //console.log(data.contentOfProgramme[0].paragraph[1]);
  let cloneArticle = templateArticle.cloneNode(true);
  cloneArticle.querySelector("h2").innerHTML = data.contentOfProgramme[1].paragraph[0].name;
  cloneArticle.querySelector("p").innerHTML = data.contentOfProgramme[1].paragraph[0].paragraph;
  // Append child
  parentText2.appendChild(cloneArticle);
}
function showText3(data) {
  // Clone and Edit
  console.log(data.contentOfProgramme[0].paragraph[2]);
  let cloneArticle = templateArticle.cloneNode(true);
  cloneArticle.querySelector("h2").innerHTML = data.contentOfProgramme[2].paragraph[0].name;
  cloneArticle.querySelector("p").innerHTML = data.contentOfProgramme[2].paragraph[0].paragraph;
  // Append child
  parentText3.appendChild(cloneArticle);
}
function showText4(data) {
  // Clone and Edit
  //console.log(data.contentOfProgramme[0].paragraph[1]);
  let cloneArticle = templateArticle.cloneNode(true);
  cloneArticle.querySelector("h2").innerHTML = data.contentOfProgramme[3].paragraph[0].name;
  cloneArticle.querySelector("p").innerHTML = data.contentOfProgramme[3].paragraph[0].paragraph;
  // Append child
  parentText4.appendChild(cloneArticle);
}
function showTextExam(data) {
  // Clone and Edit
  //console.log(data.contentOfProgramme[0].paragraph[1]);
  let cloneArticle = templateArticle.cloneNode(true);
  cloneArticle.querySelector("h2").innerHTML = data.contentOfProgramme[4].paragraph[0].name;
  cloneArticle.querySelector("p").innerHTML = data.contentOfProgramme[4].paragraph[0].paragraph;
  // Append child
  parentTextExam.appendChild(cloneArticle);
}