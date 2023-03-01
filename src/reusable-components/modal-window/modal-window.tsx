import React from 'react';

import './modal.style.css.css';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

const ModalWindow = observer(({ children }: any) => {
  const form = useStore().formStore;
  return (
    <div
      className={form.modal ? 'modal active' : 'modal'}
      onClick={() => form.changeModal()}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={form.modal ? 'modal_content active' : 'modal_content'}>
        {children}
      </div>
    </div>
  );
});

export default ModalWindow;
