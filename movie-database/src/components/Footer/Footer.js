/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import styles from "./Footer.module.css";
import styled from "styled-components";

const StyledFooter= styled.div`
   background-color: #1DB954;
   color: #fff;
   padding: 1rem;
   text-align: center;

  h2{
    margin-bottom: 1rem;
  }

  p{
    margin-bottom: 1rem;
  }
`;

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledFooter>
      <footer>
        <h2>Moviequ</h2>
        <p>Created by sam0042</p>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
