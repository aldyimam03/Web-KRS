import React, { useContext } from 'react';
import { FiX, FiCheckCircle, FiAlertCircle, FiAlertTriangle, FiInfo } from 'react-icons/fi';
import { ToastContext } from '../context/ToastContext';

type ToastType = 'success' | 'error' | 'warning' | 'info';

const icons: Record<ToastType, React.ReactNode> = {
  success: <FiCheckCircle size={20} className="text-green-500" />,
  error: <FiAlertCircle size={20} className="text-red-500" />,
  warning: <FiAlertTriangle size={20} className="text-amber-500" />,
  info: <FiInfo size={20} className="text-blue-500" />,
};

const typeClasses: Record<ToastType, string> = {
  success: 'toast-success',
  error: 'toast-error',
  warning: 'toast-warning',
  info: 'toast-info',
};

function ToastItem({ toast, onClose }: { toast: any; onClose: (id: string) => void }) {
  const { id, type, title, message } = toast;

  return (
    <div className={`toast ${typeClasses[type]}`} role="alert">
      <div className="toast-icon">{icons[type]}</div>
      <div className="toast-content">
        <div className="toast-title">{title}</div>
        {message && <div className="toast-message">{message}</div>}
      </div>
      <button className="toast-close" onClick={() => onClose(id)} aria-label="Close">
        <FiX size={16} />
      </button>
    </div>
  );
}

export function ToastContainer() {
  const ctx = useContext(ToastContext);
  if (!ctx) return null;
  const { toasts, hideToast } = ctx;

  return (
    <div className="toast-container" role="region" aria-label="Notifications">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={hideToast} />
      ))}
    </div>
  );
}