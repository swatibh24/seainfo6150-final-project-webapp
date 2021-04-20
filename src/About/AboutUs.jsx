import React from "react";
import styles from "./AboutUs.module.css";
import { Link } from "react-router-dom";


const AboutUs = () => {
  return (
        <section className={styles.aboutContainer}>
         <img className={styles.aboutImage} src="http://bmcollegebalotra.com/img/aboutus.jpg" alt="about us" />
         <h1 className={styles.aboutTitle}>About the website</h1>
         <p className={styles.aboutDetail}>
           You can explore as many delicious recipes as you want here!!! Enjoy your
           delicious meal !!!
         </p>
         <h2 className={styles.aboutTitle}>About us</h2>
         <p className={styles.aboutDetail}>
           We are a team where every one of us loves to cook. Before this website
           was developed, we tended to search on the internet and hope to find some
           ideas for our next meal. Rather than searching randomly, we thought that
           it would be great if we create a recipe website for our own. Our purpose is
           allowing you to find the recipes you loved in a more simpler and quicker
           way, and by selecting your favorite recipes first, and then follow
           step-by-step instructions to cook or bake, we believe that you can be a
           master chef, too !!!
         </p>
         <h2 className={styles.aboutTitle}>Our Team</h2>
         <p className={styles.aboutDetail}>
           Our team members love the fun which cooking can bring to us, but we
           prefer more on creativity and novelty. While exploring our website,
           maybe you'll notice of the diversity of our recipes. This is because we
           love to try new things !!!  Hope you'll discover the joy of cooking like we
           do.
         </p>
         <p className={styles.aboutRegister}>
           If you love our website,&nbsp;
           <Link className={styles.aboutRegisterButton} to="/register">Register</Link>
           &nbsp;on our website to get the future recipe updates!
         </p>
       </section>
  );
};

export default AboutUs;
