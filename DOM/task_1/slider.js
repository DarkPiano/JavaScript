const leftSide = document.querySelector("#left");
const rightSide = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = getComputedStyle(items);

rightSide.addEventListener('click', (event) => {
    event.preventDefault();
    let currentRight = parseInt(computedStyles.right);
    if (currentRight < 500) {
        items.style.right = `${currentRight+100}px`;
    }
});

leftSide.addEventListener('click', (event) => {
    event.preventDefault();
    let currentRight=parseInt(computedStyles.right);

    if(currentRight>0){
        items.style.right=`${currentRight-100}px`;
    }
});