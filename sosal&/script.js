const noButton = document.getElementById("no");

function moveNoButton() {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;
    
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("touchstart", moveNoButton);

document.getElementById("yes").addEventListener("click", function() {
    alert("МЫ ЗНАЛИ ЧТО СОСАЛ!");
});
