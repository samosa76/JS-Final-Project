import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <h3 className={styles.footer_title}>Sam.co.id</h3>
            <p>Created by me</p>
        </div>
    )
}

export default Footer;