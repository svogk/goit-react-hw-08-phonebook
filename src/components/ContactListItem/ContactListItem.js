import React from 'react';
import PropTypes from 'prop-types';
import { ListItemText } from '@material-ui/core';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AddIcCallSharpIcon from '@material-ui/icons/AddIcCallSharp';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  avatar: {
    marginRight: 20,
    width: 30,
    height: 30,
  },
  list: {
    width: 500,
    margin: '0 auto',
  },
}));
const ContactListItem = ({ id, name, number, onDelete }) => {
  const classes = useStyles();

  return (
    <ListItem key={id}>
      <ListItemAvatar>
        <Avatar className={classes.avatar}>
          <AddIcCallSharpIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={`Name: ${name}`} secondary={`Number: ${number}`} />
      <Button
        variant="contained"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => onDelete(id)}
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.protoTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
