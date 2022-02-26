const modal = document.getElementById("modal");
const btnModal = document.querySelector(".modal-btn");
btnModal.addEventListener("click", (e) => {
  modal.style.display = "flex";
  console.log("모달출력");
});

const closeBtn = modal.querySelector(".close");
closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  console.log(e.target);
  const evTarget = e.target;
  if (evTarget.classList.contains("modal-overlay")) {
    modal.style.display = "none";
  }
});
