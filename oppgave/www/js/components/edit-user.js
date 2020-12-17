import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  //updates a user's info
  updateUser(e) {
    const dataForm = new FormData(e.target.form);
    console.log(e)
    fetch('api/updateUser.php', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("The user was successfully updated");
        } else {
            console.log("Error: The user was not updated");
        }
      })
  }
}
customElements.define('edit-user', EditUser);
