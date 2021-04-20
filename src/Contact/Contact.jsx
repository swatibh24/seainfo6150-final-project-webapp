import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
  <section className={styles.contactContainer}>
        <div className={styles.Contact_part}>
            <h2 className={styles.title}>Contact Us</h2>
            <h3 className={styles.text}>Need Help? Get it now.</h3>
            <div className={styles.method}>
            <div>
              <img  className={styles.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSNwCOUh9OiIFJHTPGAaQcDzMJlS065XtEg&usqp=CAU"
              alt="logo" />
              </div>
              <h2 className={styles.subtitle}>By Phone</h2>
              <div className={styles.desc}>
                <small>(Monday to Friday, 9am to 6pm PST)</small><br/>
                North America Toll-Free:<br/>
                1-111-111-1000<br/>
                International:<br/>
                1-222-000-2222<br/>
              </div>
            </div>
            <div className={styles.method}>
            <div>
              <img
              className={styles.logo}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlX_7Iy5v4hGWd5RqxrxxBkTAwurwK9pC98A&usqp=CAU"
              alt="logo"
            />
              </div>
              <h2 className={styles.subtitle}>Live Chat</h2>
              <div className={styles.desc}>
                Chat with a member of our in-house team.<br/>
                We are online 24/7<br/>
                Monday to Friday, 9am to 6pm PST<br/>
               </div>
            </div>
            <div className={styles.method}>
            <div>
              <img
              className={styles.logo}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMEny7-sAxtOq60-jkos31mmaBoSl9mmlZQ&usqp=CAU"
              alt="logo"/>
              </div>
              <h2 className={styles.subtitle}>By Email</h2>
              <div className={styles.desc}>
                Send us email at myhomerecipes@northeastern.com<br/>
              </div>
            </div>
        
        </div>
    </section>
);

export default Contact;