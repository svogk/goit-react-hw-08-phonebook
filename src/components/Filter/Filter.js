import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as phonebookActions from '../../redux/phonebook-actions';
import { getFilter } from '../../redux/phonebook-selectors';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    width: 300,
    marginBottom: theme.spacing(1),
    margin: '0 auto',
    textAligne: 'center',
  },
  search: {
    margin: '0',
    color: '#3f51b5',
  },
}));

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onChange = event =>
    dispatch(phonebookActions.changeFilter(event.target.value));
  return (
    <div className={classes.form}>
      <p className={classes.search}>Find contacts by name</p>
      <form>
        <TextField
          id="filled-basic"
          variant="filled"
          margin="normal"
          label="Name"
          autoFocus
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
          fullWidth
        />
      </form>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
