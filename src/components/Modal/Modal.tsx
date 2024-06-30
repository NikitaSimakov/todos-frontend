import { ReactNode, FC, useEffect, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { VscChromeClose } from 'react-icons/vsc';
import css from './Modal.module.scss';

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
}

const modalRoot = document.getElementById('modal-root') as HTMLElement;

export const Modal: FC<IModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    const esc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', esc);
    return () => {
      window.removeEventListener('keydown', esc);
    };
  }, [onClose]);

  const onEscTapHandler = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (event.target === event.currentTarget) onClose();
  };

  const modalContent = (
    <div onClick={onEscTapHandler} className={css.overlay}>
      <section className={css.modal}>
        <button onClick={onClose} className={css.closeButton} type="button">
          <VscChromeClose />
        </button>
        {children}
      </section>
    </div>
  );
  return createPortal(modalContent, modalRoot);
};
