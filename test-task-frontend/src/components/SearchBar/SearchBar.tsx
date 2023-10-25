import React, { useEffect, useState } from 'react';
import { useDebounce } from "use-debounce";

import { useAppStore } from '../../store';
import MagnifyingGlass from '../MagnifyingGlass';

import styles from "./SearchBar.module.scss";

export const SearchBar: React.FC = () => {
    const { setQuery } = useAppStore();

    const [inputValue, setInputValue] = useState("");
    const [searchValue] = useDebounce(inputValue, 500);

    useEffect(() => {
        setQuery(searchValue);
    }, [searchValue, setQuery]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => setInputValue(e.target.value);

    return (
        <form className={styles.wrapper}>
            <input required name="search" className={styles.input} onChange={handleChange} value={inputValue} />

            <button type="submit" className={styles.searchButton}>
                <MagnifyingGlass />
            </button>
        </form>
    );
};
