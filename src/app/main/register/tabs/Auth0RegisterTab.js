import Button from '@mui/material/Button';
import auth0Service from 'app/services/auth0Service';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserDataAuth0 } from 'app/auth/store/userSlice';
import { showMessage } from 'app/store/fuse/messageSlice';

function Auth0RegisterTab(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    showDialog();

    auth0Service.onAuthenticated(() => {
      dispatch(showMessage({ message: 'ورود با Auth0' }));

      auth0Service.getUserData().then((tokenData) => {
        dispatch(setUserDataAuth0(tokenData));

        dispatch(showMessage({ message: 'ورود موفقیت آمیز با Auth0' }));
      });
    });
  }, [dispatch]);

  function showDialog() {
    auth0Service.register();
  }

  return (
    <div className="w-full">
      <Button className="w-full my-48" color="primary" variant="contained" onClick={showDialog}>
        ورود / ثبت نام با Auth0
      </Button>
    </div>
  );
}

export default Auth0RegisterTab;
