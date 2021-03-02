export default () => {
    // Number Rate
    const rateMessage = document.querySelector(".m-rate__messageArea");
    const rateButtonList = document.querySelectorAll(".js-rate input");

    // Sentiment Rate
    const sentimentRateMessage = document.querySelector(".m-sentiment__messageArea");
    const sentimentButtonList = document.querySelectorAll(".js-sentimentRate input");

    rateButtonList.forEach(button => {
        button.addEventListener('click', (event) => {
            if(event.target.checked) {
                rateMessage.style.display = "block";
                rateMessage.classList.add("-opened");
            }
        });
    });

    sentimentButtonList.forEach(button => {
        button.addEventListener('click', (event) => {
            if(event.target.checked) {
                sentimentRateMessage.classList.add("-show");
            }
        });
    });
};