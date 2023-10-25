import React, { useEffect, useState } from 'react';

import UserCard from '../UserCard/UserCard';
import { useGetUsers } from '../../api';
import { useAppStore } from '../../store';

import styles from "./ItemList.module.scss";
import UserModal from '../UserModal/UserModal';

export const ItemList: React.FC = () => {
    const { query } = useAppStore();
    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

    const { fetchUsers, loading, users } = useGetUsers();

    useEffect(() => {
        fetchUsers(query);
    }, [fetchUsers, query]);

    if (loading) {
        return <p>Loading...</p>;
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

            <UserModal user={selectedUser} />
        </>
    )
}
