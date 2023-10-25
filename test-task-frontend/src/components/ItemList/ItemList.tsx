import React, { useEffect } from 'react';

import { useAppStore } from '../../store';
import { useGetUsers } from '../../api';
import UserCard from '../UserCard/UserCard';

export const ItemList: React.FC = () => {
    const { query } = useAppStore();

    const { fetchUsers, loading, users } = useGetUsers();

    useEffect(() => {
        fetchUsers(query);
    }, [fetchUsers, query]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {users.slice(0, 1).map(u => <UserCard key={u.phone} user={u} />)}
        </div>
    )
}
