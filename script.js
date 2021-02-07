const ideas = document.querySelectorAll(".ideas");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  removeChoosen();
  const min = 0;
  const max = ideas.length;
  const index = Math.floor(Math.random() * (max - min + 1) + min);

  ideas[index].classList.toggle("choosen");

  function removeChoosen() {
    const choosen = document.getElementsByClassName("choosen");
    if (choosen.length > 0) {
      choosen[0].classList.toggle("choosen");
      console.log(choosen);
    }
  }
});

// через цикл убрать у всех  класс choosen или найти и убрать с помощью classList.remove
