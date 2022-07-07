import data from "./data.js"

const sumbmit_btn = document.getElementById('search_button')
const acronym_input = document.getElementById('acronym_input')


sumbmit_btn.addEventListener('click', (event) => {
    event.preventDefault()
    const acronym_input = document.getElementById('acronym_input')
    let fullNameOutput = document.getElementById('fullName')
    fullNameOutput.innerHTML = `Sorry ${acronym_input.value} doesn't exist`
    for (let i = 0; i < data.length; i++) {
        if (acronym_input.value.toUpperCase() == data[i]['acronym']) {
            fullNameOutput.innerHTML = data[i]['fullName']
        }
    }
})

function dropDownList() {

    const acronym_input = document.getElementById('acronym_input')
    const dropdown_list = document.getElementById('dropdown')

    acronym_input.addEventListener("keyup", (event) => {
        removeAllChildNodes(dropdown_list)
        const searchName = event.target.value.toUpperCase()
        // console.log(data['acronym'])
        for (let i = 0; i < data.length; i++) {
            if (data[i]['acronym'].toUpperCase().includes(searchName)) {
                const option_value = document.createElement("option")
                option_value.innerHTML = data[i]['acronym']
                dropdown_list.appendChild(option_value)
            }
        }
    })
}



// CLEAR THE CONTENT BEFORE SEARCH AGAIN
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}
dropDownList()

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