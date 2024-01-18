import React from "react";
import styles from "./Phone.module.scss";

function Phone() {
  return (
    <div className={styles.btnPhone}>
      <button>
        <i class="fas fa-phone-alt"></i>
        <a href="tel:02866866067"></a>
      </button>
    </div>
  );
}

export default Phone;
