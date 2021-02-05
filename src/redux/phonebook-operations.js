import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addRequest,
  addSuccess,
  addError,
  deleteRequest,
  deleteSuccess,
  deleteError,
} from './phonebook-actions';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addNewContact = nameContact => dispatch => {
  dispatch(addRequest());

  axios
    .post('/contacts', nameContact)
    .then(({ data }) => dispatch(addSuccess(data)))
    .catch(error => dispatch(addError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteSuccess(id)))
    .catch(error => dispatch(deleteError(error)));
};

const actions = {
  fetchContacts,
  addNewContact,
  deleteContact,
};

export default actions;
