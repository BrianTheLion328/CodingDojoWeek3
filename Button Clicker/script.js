/* LOGIN BUTTON TO LOGOUT */

function loginButton() {
    let loginButton = document.getElementById("loginButton");

    if (loginButton.innerText = "Login"){
            loginButton.innerText = "Logout"
        }
}

/* REMOVE ADD DEFINITION BUTTON WHEN CLICKED */

function removeAddDefinitionButton(element) {
    let addDefButton = document.getElementById("add-definition-button");

    element.remove(addDefButton);
}

