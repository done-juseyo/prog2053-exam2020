import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }
  
  render () {
    return html`
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    </head>
    <form onsubmit="javascript: return false;" id="userForm" method="POST">
      <div class="form-group pt-5 ml-3" style="width: 30rem;">
        <label for="email">Email</label>
        <input class="form-control" id="uname" name="uname" type="text" value="${this.user.uname}" required>
        <input type="hidden" id="uid" name="uid" value="${this.user.uid}">
      </div>
      <div class="form-group pt-1 ml-3" style="width: 30rem;">
        <label for="firstName">First Name</label>
        <input class="form-control" id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
      </div>
      <div class="form-group pt-1 ml-3" style="width: 30rem;">
        <label for="lastName">Last Name</label>
        <input class="form-control" id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
      </div>
      <div class="form-group pt-1 ml-3" style="width: 30rem;">
        <label for="oldpassword">Old Password</label>
        <input type="password" class="form-control" id="oldpassword" name="oldpassword" type="text" value="">
      </div>
      <div class="form-group pt-1 ml-3" style="width: 30rem;">
        <label for="newpassword">New Password</label>
        <input type="password" class="form-control" id="password" name="password" type="text" value="">
      </div>
      <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" class="btn btn-warning mt-2 ml-3" value="Edit User"></input>
    </form>
    `;
  }

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
