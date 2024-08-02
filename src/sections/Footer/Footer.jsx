import styles from "./FooterStyles.module.css";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {currentYear} Victor Elias. <br />
        All rights reserved.
      </p>
    </section>
  );
}
export default Footer;
