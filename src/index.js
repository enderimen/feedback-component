// import another component
import main from './main';

const rateMessage = document.querySelector(".m-rate__messageArea");
const rateButtonList = document.querySelectorAll(".js-rate input");

rateButtonList.forEach(button => {
    button.addEventListener('click', (event) => {
        if(event.target.checked) {
            rateMessage.style.display = "block";
            rateMessage.classList.add("-opened");
        }
    });
});

main();