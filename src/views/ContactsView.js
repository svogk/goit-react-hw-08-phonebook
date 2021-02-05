import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container/Container';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { getLoading } from '../redux/phonebook-selectors';
import actions from '../redux/phonebook-operations';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => dispatch(actions.fetchContacts()), [dispatch]);

  const styles = {
    title: {
      color: '#3f51b5',
      textAlign: 'center',
      fontWeight: '700',
    },
  };

  return (
    <Container>
      <div>
        <h1 style={styles.title}>Phonebook</h1>
        <ContactForm />
        <h2 style={styles.title}>Contacts</h2>
        <Filter />
        {isLoadingContacts ? <h1>Loading...</h1> : <ContactList />}
      </div>
    </Container>
  );
}
