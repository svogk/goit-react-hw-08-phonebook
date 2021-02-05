import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/phonebook-operations';
import { getVisibleContact } from '../../redux/phonebook-selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles(() => ({
  list: {
    width: 500,
    margin: '0 auto',
  },
}));

const ContactList = () => {
  const classes = useStyles();
  const contacts = useSelector(getVisibleContact);

  const dispatch = useDispatch();

  const onDelete = id => dispatch(actions.deleteContact(id));

  useEffect(() => {
    const fetchContacts = () => dispatch(actions.fetchContacts());
    fetchContacts();
  }, [dispatch]);

  if (contacts.length === 0) return null;

  return (
    <List className={classes.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={onDelete}
          id={id}
        />
      ))}
    </List>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};

export default ContactList;
