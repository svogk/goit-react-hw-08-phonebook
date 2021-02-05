import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/phonebook-operations';
import { getContacts } from '../../redux/phonebook-selectors';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  form: {
    width: 400,
    marginTop: theme.spacing(2),
    margin: '0 auto',
    textAligne: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const classes = useStyles();

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onAddContact = nameContact =>
    dispatch(actions.addNewContact(nameContact));

  console.log(name, number);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isValidateForm = validateForm(name, number);
    if (!isValidateForm) {
      reset();
      return;
    }
    onAddContact({ id: uuidv4(), name, number });
    reset();
  };

  const onCheckContact = name => {
    const isExistContact = !!contacts.find(contact => contact.name === name);
    if (isExistContact) {
      alert('A contact with the same name already exists!');
    }
    return !isExistContact;
  };

  const validateForm = (name, number) => {
    if (!name.trim() || !number.trim()) {
      return false;
    }
    return onCheckContact(name);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          variant="filled"
          margin="normal"
          required
          label="Name"
          autoFocus
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          id="filled-basic"
          variant="filled"
          margin="normal"
          required
          label="Number"
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          fullWidth
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Add contact
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
