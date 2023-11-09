import React from 'react';
import { Header } from './Header/Header';
import css from './styles.module.scss';

export const App = () => {
  return (
    <div className={css.app}>
      <Header />
    </div>
  );
};
