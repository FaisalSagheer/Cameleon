






const input = document.querySelector('.addingColor');
const colorfull = document.getElementById('colorfull');
const addBtn = document.getElementById('add');
const display = document.getElementById('display');


function addingFunc() {
    const addingColor = input.value.trim();

    try {
        if (addingColor === "") {
            throw new Error('Write a Color Name Or Color Code')
        }
        else {
            const testElement = document.createElement("div");
            testElement.style.color = addingColor;

            if (testElement.style.color === "") {
                throw new Error('Invalid color name or color code');
            } else {
                display.style.backgroundColor = addingColor;
            }
        }

    } catch (error) {
        alert(error.message)
    }
}
addBtn.addEventListener("click", addingFunc)


function updatecolor(){
    display.style.backgroundColor = colorfull.value
}




