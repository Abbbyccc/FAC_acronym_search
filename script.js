import data from "./data.js"

const acronym_input = document.getElementById('acronym_input').value
const sumbmit_btn = document.getElementById('search_button')

let onChange = (event) => {
    console.log(this.event.data)
}

acronym_input.addEventListener('input', onChange)

const loopData = () => {

}


// const updateDebounceValue = () => {
//     debounceValue.innerHTML = acronym_input.value;
// }

// let debounceTimer;

// const debounce = (callback, time) => {
//     window.clearTimeout(debounceTimer);
//     debounceTimer = window.setTimeout(callback, time);
// };

// input.addEventListener(
//     "input",
//     () => {
//         debounce(updateDebounceValue, 500)
//     },
//     false
// );