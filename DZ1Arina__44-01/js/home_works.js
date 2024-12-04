// gmail block

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-z0-9._%+-]+@gmail\.com$/i

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }   else {
        gmailResult.innerHTML = 'Invalid gmail'
        gmailResult.style.color = 'red'
    }
}



//move block

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;

if (parentBlock && childBlock) {
    const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;

    const moveBlock = () => {
        if (positionX < offsetWidth) {
            positionX++;
            childBlock.style.left = `${positionX}px`;
            requestAnimationFrame(moveBlock);
        }
    }

    moveBlock();
} else {
    console.error('Parent or child block not found!');
}