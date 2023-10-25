import React, { useEffect } from 'react';

import { useAppStore } from '../../store';
import { useGetUsers } from '../../api';

export const ItemList: React.FC = () => {
    const { query } = useAppStore();

    const { error, fetchUsers, loading, users } = useGetUsers();

    useEffect(() => {
        fetchUsers(query);
    }, [fetchUsers, query]);

    useEffect(() => console.log(error, "error"), [error]);
    useEffect(() => console.log(loading, "loading"), [loading]);
    useEffect(() => console.log(users, "users"), [users]);

    return (
        <div>
            {users.map(u => <p>{u.name}</p>)}
        </div>
    )
}
