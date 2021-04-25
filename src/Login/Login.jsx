import React, {useEffect, useState} from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";

const Login = () => {
  const [submittedFrm, setSubmittedFrm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedFrm(data);
  };
  return (
    <div>{
        submittedFrm ?(<p className={styles.welcome}>Welcome {submittedFrm.get("username")}!</p>): (
          <form onSubmit={onSubmit} className={styles.contentBox}>
            <div className="logoBox">
            <img className={styles.logo} src="http://shoppopbox.com/wp-content/uploads/2017/09/homechef-logo-square-1.jpg" alt="loginpage" />
            </div>
            <h1 className={styles.loginTitle}>Login</h1>
            <div className={styles.usernameBox}>
              <input type="text" className={styles.input} name="username" id="username" required="required" placeholder="Please Enter Username"/>
            </div>
            <div className={styles.passwordBox}>
              <input type="password" className={styles.input} name="password" id="password" required="required" placeholder="Please Enter Password"/>
            </div>
            <div className={styles.grid}><Link to="/register" className={styles.signUp}>SignUp</Link>
            <input className={styles.login} type="submit" value="Login" />
            </div>
          </form>
        )
      }
    </div>
  )
}

export default Login;