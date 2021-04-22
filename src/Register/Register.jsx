import React, {useEffect, useState} from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {

  const [submittedForm, setSubmittedForm] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div>
      {submittedForm ?  (<p className={styles.welcome}>Hi Welcome {submittedForm.get("username")}, Thank you for joining us!</p>) : (
          <form onSubmit={onSubmit} className={styles.containerBox}>
            <div className="logoBox">  
            <img
              className={styles.logo}
              src="http://shoppopbox.com/wp-content/uploads/2017/09/homechef-logo-square-1.jpg"/>
            </div>
            <h1 className={styles.registerTitle}>SignUp</h1>
            <div className={styles.usernameBox}>
              <input type="text" className={styles.input} name="username" id="username" placeholder="Please Enter Username *" required="required"/>
            </div>
            <div className={styles.passwordBox}>
              <input type="password" className={styles.input} name="password" id="password" placeholder="Please Enter Password *" required="required"/> <br/>
            </div>
            <div className={styles.emailBox}>
              <input type="email" className={styles.input} name="email" id="email" placeholder="Please Enter Email Address *" required="required"/><br/>
            </div>
            <div className={styles.zipcodeBox}>
              <input type="number" className={styles.opInput} name="zipcode" placeholder="Please Enter Zip Code" id="zipcode"/><br/>
            </div>
            <div className={styles.phoneBox}>
              <input type="number" className={styles.opInput} name="phone" placeholder="Please Enter Phone Number" id="phone"/> <br/>
            </div>
           
            <div className={styles.genderBox}>
              <label htmlFor="gender">Gender: </label>
              <select name="genderDropdown" id="genderDropdown" className={styles.dropdown}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="decline">Decline to identify</option>
              </select>
            </div>
            <div className={styles.ageBox}>
                <label htmlFor="age">Age: </label>
                <select name="ageDropdown" id="ageDropdown" className={styles.dropdown}>
					<option value="1">1-10</option>
                    <option value="10">10-20</option>
                    <option value="20">20-30</option>
                    <option value="30">30-40</option>
                    <option value="40">40+</option>
                </select>
            </div>
            <div className={styles.checkBox}>
                <p>Interested in</p>
                <label htmlFor="soup" className={styles.checkItem}>Soup
                    <input type="checkbox" name="soup" className={styles.inputItem} />
                </label>
                <label htmlFor="appetizer" className={styles.checkItem}>Appetizer
                    <input type="checkbox" name="appetizer" className={styles.inputItem} />
                </label>
                <label htmlFor="mainCourse" className={styles.checkItem}>Main Course
                    <input type="checkbox" name="mainCourse" className={styles.inputItem} />
                </label>
				        <label htmlFor="snack" className={styles.checkItem}>Snack
                    <input type="checkbox" name="snack" className={styles.inputItem} />
                </label>
				        <label htmlFor="dessert" className={styles.checkItem}>Dessert
                    <input type="checkbox" name="dessert" className={styles.inputItem} />
                </label>
            </div>
            <input className={styles.register} type="submit" value="SignUp" />
          </form>
        )
      }
    </div>
  )
}

export default Register;