// hooks/useUser.js
import { useDispatch, useSelector } from 'react-redux';
import { createOrderThunk } from '../redux/reducers/orderSlice';

const useOrder = () => {
  const dispatch = useDispatch();
  const { currentOrder, loading, error } = useSelector(state => state.order);

  // Fungsi register, terima userData misal { name, email, password }
  const createOrder = (userData) => {
    dispatch(createOrderThunk(userData));
  };

  return { currentOrder, loading, error, createOrder };
};

export default useOrder;
