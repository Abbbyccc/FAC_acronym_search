import data from "./data.js"

const sumbmit_btn = document.getElementById('search_button')

function clearOutput() {

}
sumbmit_btn.addEventListener('click', (event) => {
    event.preventDefault()
    const acronym_input = document.getElementById('acronym_input')
    const fullNameOutput = document.getElementById('fullName')
    const error_msg = document.getElementById("error_msg")
    error_msg.innerHTML = ""
    console.log(error_msg.innerHTML)
    removeAllChildNodes(fullNameOutput)

    for (let i = 0; i < data.length; i++) {
        if (data[i]['acronym'].toUpperCase().includes(acronym_input.value.toUpperCase()) && acronym_input.value.toUpperCase() !== "") {
            let result_value = document.createElement("li")
            result_value.innerHTML = data[i]['fullName']
            fullNameOutput.appendChild(result_value)

        } else {
            error_msg.innerHTML = `Sorry ${acronym_input.value} doesn't exist`
        }
    }
})




const acronym_input = document.getElementById('acronym_input')
const dropdown_list = document.getElementById('dropdown')

acronym_input.addEventListener("keydown", (event) => {
    removeAllChildNodes(dropdown_list)
    const searchName = event.key.toUpperCase()
    const filteredChar = []

    for (let i = 0; i < data.length; i++) {
        if (data[i]['acronym'].includes(searchName)) {
            filteredChar.push(data[i]['acronym'])
        }

    }
    for (let i = 0; i < filteredChar.length; i++) {
        let option_value = document.createElement("option")
        option_value.value = filteredChar[i]
        dropdown_list.appendChild(option_value)
    }

})


// CLEAR THE CONTENT BEFORE SEARCH AGAIN
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}