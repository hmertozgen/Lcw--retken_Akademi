const addImg = document.querySelector(".img");
const buttonChanger = document.querySelector(".button");
const photoNums = 12;

for (i = 0; i < photoNums; i++) {
  addImg.innerHTML += `<div class="col-4 mb-3"><img src="https://picsum.photos/300/300/?random${i}" alt=""></div>`;
}

buttonChanger.addEventListener("click", function () {
  addImg.innerHTML = "";
  for (i = 0; i < photoNums; i++) {
    let randomNumber = Math.floor(Math.random() * 500 + 1);
    addImg.innerHTML += `<div class="col-4 mb-3"><img src="https://picsum.photos/300/300/?random${randomNumber}" alt=""></div>`;
  }
});
