//Number of stars provided to the user must be dynamic
const starCount = 5; // here we are keeping it as 5
for (let i = 0; i < starCount; i++) {
  let element = document.createElement("span");
  element.id = i;
  element.className = "star";
  element.innerHTML = "&#9733;";
  document.querySelector(".star-container").append(element);
}
const starElement = Array.from(document.querySelectorAll(".star"));
console.log(starElement);
// onClick event
starElement.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    const id = Number(event.target.id);
    for (let i = 0; i <= 4; i++) {
      starElement[i].style.color = "gray";
    }
    for (let i = 0; i <= id; i++) {
      //   console.log(starElement[i]);
      starElement[i].style.color = "yellow";
    }
    document.querySelector(".rating-count").innerHTML = id + 1;
  });
});
// on mouseover event
starElement.forEach((item, index) => {
  item.addEventListener("mouseover", (event) => {
    const id = Number(event.target.id);
    for (let i = 0; i <= 4; i++) {
      starElement[i].style.color = "gray";
    }
    for (let i = 0; i <= id; i++) {
      //   console.log(starElement[i]);
      starElement[i].style.color = "yellow";
    }
  });
});
