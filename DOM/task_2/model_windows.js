const openButtton = document.querySelector("#openOverlay");
const body = document.body;

openButtton.addEventListener("click", event => {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    const containerElement = document.createElement("div");
    containerElement.classList.add("model-container")

    const contentElement = document.createElement("div");
    contentElement.classList.add("content")

    contentElement.innerHTML = "Hello <b>world<b>!";

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href = "#";

    closeElement.addEventListener("click", (event) => {
        event.preventDefault();
        body.removeChild(overlayElement);
      });

    containerElement.appendChild(closeElement);
    overlayElement.appendChild(containerElement);
    containerElement.appendChild(contentElement);

    body.appendChild(overlayElement);
});