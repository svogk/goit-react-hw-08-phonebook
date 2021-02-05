import React from 'react';
import s from './HomeView.module.css';

const HomeView = () => (
  <div className={s.container}>
    <h1 className={s.title}>phonebook</h1>
    <p className={s.description}>To view or add contacts, login or register</p>
  </div>
);

export default HomeView;
