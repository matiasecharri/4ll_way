const isLiked = button => {
  !button.classList.contains("liked")
    ? button.classList.add("liked")
    : button.classList.remove("liked");
};

const renderLike = button => {
  button.classList.contains("liked")
    ? (button.innerText = "Ya no me gusta")
    : (button.innerText = "Me gusta");
};

document.addEventListener("click", event => {
  if (event.target.matches("button")) {
    let $button = event.target;
    isLiked($button);
    renderLike($button);
  }
});
