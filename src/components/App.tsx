import React from 'react';
import { AboutUs } from './AboutUs/AboutUs';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import css from './styles.module.scss';

export const App = () => {
  return (
    <div className={css.app}>
      <Header />
      <Hero />
      <AboutUs />
    </div>
  );
};
