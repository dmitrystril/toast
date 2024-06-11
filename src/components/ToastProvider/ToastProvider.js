import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(toast) {
    const nextToasts = [...toasts, { id: crypto.randomUUID(), ...toast }];
    setToasts(nextToasts);
  }

  function removeToast(id) {
    const nextToasts = toasts.filter((item) => item.id !== id);
    setToasts(nextToasts);
  }

  const removeAllToasts = React.useCallback(() => setToasts([]), []);
  useEscapeKey(removeAllToasts);

  const contextValue = React.useMemo(() => {
    return { toasts, addToast, removeToast };
  }, [toasts, addToast, removeToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
