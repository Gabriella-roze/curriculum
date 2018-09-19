// Select the parents
let parentSkill = document.querySelector(".par-skill");
let parentJob = document.querySelector(".par-job");

// Select template
const templateArticle = document.querySelector("#tpl").content;

window.addEventListener("load", ()=>{
  fetch("data.json")
    .then(result=>result.json())
    .then(data=>{
      showSkill(data);
      showJob(data)
    })
});

function showSkill(data) {
  // Clone and Edit
  //console.log(data.outcome[0]);
  let cloneArticle = templateArticle.cloneNode(true);
  cloneArticle.querySelector("h2").innerHTML = data.outcome[0].paragraph[0].title;
  cloneArticle.querySelector("p").innerHTML = data.outcome[0].paragraph[0].text;
  // Append child
  parentSkill.appendChild(cloneArticle);
}
function showJob(data) {
  let cloneArticle = templateArticle.cloneNode(true);
  cloneArticle.querySelector("h2").innerHTML = data.outcome[0].paragraph[1].title;
  cloneArticle.querySelector("p").innerHTML = data.outcome[0].paragraph[1].text;
  // Append child
  parentJob.appendChild(cloneArticle);
}


$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop() > 50){
      $('nav').addClass('shrink')
    }
    else {
      $("nav").removeClass('shrink')
    }
  })
})
