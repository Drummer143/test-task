import React from 'react';
import { createPortal } from 'react-dom';

import CloseSVG from '../CloseSVG';

import styles from "./UserModal.module.scss";

type UserModalProps = {
    user?: User;

    onClose: () => void
};

const UserModal: React.FC<UserModalProps> = ({ user, onClose }) => {
    const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = e => {
        if (e.currentTarget.isSameNode(e.target as HTMLElement)) {
            onClose();
        }
    }

    if (!user) {
        return;
    }

    return createPortal(
        (
            <div
                tabIndex={-1}
                ref={ref => ref?.focus()}
                onClick={handleOverlayClick}
                className={styles.overlay}
            >
                <div className={styles.body}>
                    <div className={styles.heading}>
                        <h2>
                            {user.name}
                        </h2>

                        <button onClick={onClose} className={styles.closeButton}>
                            <CloseSVG />
                        </button>
                    </div>

                    <div>
                        <div className={styles.main_info_item}>
                            <p className={styles.main_info_item_name}>Телефон:</p>
                            <p className={styles.main_info_item_value}>{user.phone}</p>
                        </div>

                        <div className={styles.main_info_item}>
                            <p className={styles.main_info_item_name}>Почта:</p>
                            <p className={styles.main_info_item_value}>{user.email}</p>
                        </div>

                        <div className={styles.main_info_item}>
                            <p className={styles.main_info_item_name}>Дата приема:</p>
                            <p className={styles.main_info_item_value}>{user.hire_date}</p>
                        </div>

                        <div className={styles.main_info_item}>
                            <p className={styles.main_info_item_name}>Должность:</p>
                            <p className={styles.main_info_item_value}>{user.position_name}</p>
                        </div>

                        <div className={styles.main_info_item}>
                            <p className={styles.main_info_item_name}>Подразделение:</p>
                            <p className={styles.main_info_item_value}>{user.department}</p>
                        </div>
                    </div>

                    <div>
                        <h4 className={styles.additional_info_heading}>Дополнительная информация:</h4>
                        <p className={styles.additional_info_text}>
                            Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.
                        </p>
                    </div>
                </div>
            </div>
        ),
        document.getElementById("modal-root")!
    );
}
export default UserModal;