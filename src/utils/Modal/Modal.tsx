import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Modal.styles';
import ReactDOM from 'react-dom';

type ModalProps = {
    onCloseModal: () => void
}

const Modal: React.FC<ModalProps> = ({ onCloseModal, children }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const el = document.getElementById('portal') as any;
    return ReactDOM.createPortal(
        <div className={classes.modalWrapper}>
            <div className={classes.modal}>
                <div className={classes.modalCloseIcon} onClick={onCloseModal}>
                    <i className="fas fa-times"></i>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>,
        el
    );
}


export { Modal }