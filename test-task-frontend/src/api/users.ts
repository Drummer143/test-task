import axios from "axios";
import { useCallback, useState } from "react";

const baseURL = "http://localhost:3000";

interface User {
    name: string;
    phone: string;
    email: string;
    address: string;
    position_name: string;
    department: string;
    hire_date: string;
}

export const getUsers = async (query?: string) =>
    axios.get<User[]>(baseURL + (query ? `?term=${encodeURIComponent(query)}` : ""));

export const useGetUsers = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown | null>(null);
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = useCallback(async (query?: string) => {
        try {
            setLoading(true);

            const data = (await getUsers(query)).data;

            setUsers(data);
            setLoading(false);
        } catch (error) {
            setError(error);
        }
    }, []);

    return { loading, error, users, fetchUsers };
}
