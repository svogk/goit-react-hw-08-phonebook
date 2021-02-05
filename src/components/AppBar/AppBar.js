import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 80,
  },
  header: {
    width: 1100,
    margin: '0 auto',
  },
}));

export default function ButtonAppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.header}>
            <header className={classes.nav}>
              <Navigation />
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </header>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
