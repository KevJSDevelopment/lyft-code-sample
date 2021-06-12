const URL = "http://localhost:3000";

const form = document.getElementById("string-submit-form")
form.addEventListener("submit", ev => {
    ev.preventDefault()
    enterString(ev.target[0].value)
})

const list = document.getElementById("string-list")

const enterString = (string) => {

    const meta = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({ string_to_cut: string })
    }
    fetch(URL + "/test", meta)
    .then(resp => resp.json())
    .then(data => {
        const listItem = document.createElement("li")
        listItem.innerHTML = JSON.stringify(data)
        list.append(listItem)
    })
}