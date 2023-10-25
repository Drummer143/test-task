import React from 'react';

import Phone from '../Phone';
import Envelope from '../Envelope';

import styles from "./UserCard.module.scss";

type UserCardProps = {
    user: User

    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
    return (
        <button type='button' className={styles.wrapper} onClick={onClick}>
            <h3 className={styles.username}>{user.name}</h3>

            <div className={styles.additionalInfo}>
                <div className={styles.additionalInfoItem}>
                    <Phone />
                    <p>{user.phone}</p>
                </div>

                <div className={styles.additionalInfoItem}>
                    <Envelope />
                    <p>{user.email}</p>
                </div>
            </div>
        </button>
    );
}
export default UserCard;