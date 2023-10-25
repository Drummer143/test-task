import React, { useEffect, useState } from 'react';

import UserCard from '../UserCard/UserCard';
import { useGetUsers } from '../../api';
import { useAppStore } from '../../store';

import styles from "./ItemList.module.scss";
import UserModal from '../UserModal/UserModal';

export const ItemList: React.FC = () => {
    const { query } = useAppStore();
    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

    const { fetchUsers, loading, users, error } = useGetUsers();

    useEffect(() => {
        fetchUsers(query);
    }, [fetchUsers, query]);

    if (loading) {
        return <p className={styles.empty_list_alert}>Loading...</p>;
    }

    if (error) {
        return <p className={styles.empty_list_alert}>Произошла ошибка при получении данных с сервера. Попробуйте позже.</p>
    }

    if (!users.length) {
        return (
            <p className={styles.empty_list_alert}>
                {query
                    ? <>`Пользователей с ФИО, в которых есть <b>{query}</b> не найдено`</>
                    : "Список пользователе пуст."
                }
            </p>
        );
    }

    return (
        <>
            <div className={styles.wrapper}>
                {users.map((u) => (
                    <UserCard
                        onClick={() => setSelectedUser(u)}
                        key={u.phone}
                        user={u}
                    />
                ))}
            </div>

            <UserModal
                onClose={() => setSelectedUser(undefined)}
                user={selectedUser}
            />
        </>
    )
}
