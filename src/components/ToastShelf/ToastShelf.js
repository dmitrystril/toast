import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleRemoveToast }) {
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, message, variant }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              content={message}
              variant={variant}
              handleDismiss={() => handleRemoveToast(id)}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
