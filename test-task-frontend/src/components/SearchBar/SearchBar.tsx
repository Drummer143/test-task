import React, { useRef } from 'react';

import MagnifyingGlass from '../MagnifyingGlass';

import styles from "./SearchBar.module.scss";

export const SearchBar: React.FC = () => {
    const inputValue = useRef("");

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => inputValue.current = e.target.value;

    return (
        <form className={styles.wrapper}>
            <input required name="search" className={styles.input} onChange={handleChange} />

            <button type="submit" className={styles.searchButton}>
                <MagnifyingGlass />
            </button>
        </form>
    );
};
