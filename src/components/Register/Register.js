import React, { useState } from "react";
const Register = ({ onRouteChange, loadUser }) => {
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  const [name, nameChange] = useState("");
  return (
    <article className="br3 shadow-5 mw6 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                onChange={(event) => nameChange(event.target.value)}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={(event) => emailChange(event.target.value)}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={(event) => passwordChange(event.target.value)}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              onClick={() => {
                fetch("https://afternoon-oasis-37863.herokuapp.com/register", {
                  method: "post",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email: email,
                    password: password,
                    name: name,
                  }),
                })
                  .then((res) => res.json())
                  .then((user) => {
                    if (user.hasOwnProperty("id")) {
                      loadUser(user);
                      onRouteChange("home");
                    }
                  });
              }}
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;
