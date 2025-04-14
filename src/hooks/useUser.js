// hooks/useUser.js
import { useDispatch, useSelector } from 'react-redux';
import { registerUserThunk, resetUser } from '../redux/reducers/userSlice';

const useUser = () => {
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector(state => state.user);

  // Fungsi register, terima userData misal { name, email, password }
  const register = (userData) => {
    dispatch(registerUserThunk(userData));
  };

  // Optional reset state
  const reset = () => dispatch(resetUser());

  return { currentUser, loading, error, register, reset };
};

export default useUser;
