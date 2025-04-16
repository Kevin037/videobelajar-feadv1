// hooks/useUser.js
import { useDispatch, useSelector } from 'react-redux';
import { createOrderThunk, getOrders, updateOrderThunk } from '../redux/reducers/orderSlice';
import { useEffect } from 'react';

const useOrder = (id=null) => {
  const dispatch = useDispatch();
  const { orderData, currentOrder, loading, error } = useSelector(state => state.order);

  // Fungsi register, terima userData misal { name, email, password }
  const createOrder = (userData) => {
    dispatch(createOrderThunk(userData));
  };

  const updateOrder = (id,orderData) => {
    dispatch(updateOrderThunk({id,orderData}));
  };

    useEffect(() => {
      if (id) {
        dispatch(getOrders(id)); 
      }
    }, [dispatch]);

  return { currentOrder, loading, error, createOrder, orderData, updateOrder };
};

export default useOrder;
