import React, { useEffect, useState } from 'react';
import { useDebounce } from "use-debounce";

import { useAppStore } from '../../store';
import MagnifyingGlass from '../MagnifyingGlass';

import styles from "./SearchBar.module.scss";

export const SearchBar: React.FC = () => {
    const { setQuery } = useAppStore();

    const [inputValue, setInputValue] = useState("");
    const [searchValue] = useDebounce(inputValue, 500);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => setInputValue(e.target.value);

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();

        (document.activeElement as HTMLElement | null)?.blur();
    };

    useEffect(() => {
        setQuery(searchValue);
    }, [searchValue, setQuery]);

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <input required name="search" className={styles.input} onChange={handleChange} value={inputValue} />

            <button type="submit" className={styles.searchButton}>
                <MagnifyingGlass />
            </button>
        </form>
    );
};
