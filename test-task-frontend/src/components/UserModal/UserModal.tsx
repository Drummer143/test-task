import React from 'react';
import { createPortal } from 'react-dom';

import styles from "./UserModal.module.scss";

type UserModalProps = {
    user?: User;
};

const UserModal: React.FC<UserModalProps> = ({ user }) => {

    if (!user) {
        return;
    }

    return createPortal(
        (
            <div className={styles.overlay}>
                {user.department}
            </div>
        ),
        document.getElementById("modal-root")!
    );
}
export default UserModal;