// Select the parents
let parentSkill = document.querySelector(".par-skill");
let parentJob = document.querySelector(".par-job");

// Select template
const templateArticle = document.querySelector("#tpl").content;


// Append child

window.addEventListener("load", ()=>{
  fetch("data.json").then(result=>result.json()).then(showSkill)
});

function showSkill(data) {
  // Clone and Edit
  // Uncomment below to see what data do we get from the json file.
  // You can also try to delete console log only data and try to dive deeper into objects and arrays to see if you can locate the title and the text yourself.
  // console.log(data.outcome[0].paragraph[0].title);
  let cloneArticle = templateArticle.cloneNode(true);
  cloneArticle.querySelector("h2").innerHTML = data.outcome[0].paragraph[0].title;
  cloneArticle.querySelector("p").innerHTML = data.outcome[0].paragraph[0].text;
  parentSkill.appendChild(cloneArticle);
}