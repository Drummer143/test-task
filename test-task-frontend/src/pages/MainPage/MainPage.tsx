import React from 'react';

import { SearchBar } from '../../components';

import styles from "./MainPage.module.scss";

export const MainPage: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <SearchBar />
        </div>
    );
}
