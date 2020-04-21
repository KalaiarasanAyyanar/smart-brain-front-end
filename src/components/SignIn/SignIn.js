import React, { useState } from "react";
const SignIn = ({ onRouteChange, loadUser }) => {
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  return (
    <article className="br3 shadow-5 mw6 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                onChange={(event) => emailChange(event.target.value)}
                name="email-address"
                id="email-address"
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
                fetch("https://afternoon-oasis-37863.herokuapp.com/signin", {
                  method: "post",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    email: email,
                    password: password,
                  }),
                })
                  .then((res) => res.json())
                  .then((res) => {
                    if (res.hasOwnProperty("id")) {
                      loadUser(res);
                      onRouteChange("home");
                    }
                  });
              }}
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              onClick={() => onRouteChange("register")}
              className="f6 link dim black db pointer"
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default SignIn;
