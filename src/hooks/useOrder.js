// hooks/useUser.js
import { useDispatch, useSelector } from 'react-redux';
import { createOrderThunk, getOrderById, getOrders, updateOrderThunk } from '../redux/reducers/orderSlice';
import { useEffect } from 'react';

const useOrder = (order_id=null,id=null) => {
  const dispatch = useDispatch();
  const { orderData, currentOrder, loading, error, status } = useSelector(state => state.order);

  const createOrder = (userData) => {
    dispatch(createOrderThunk(userData));
  };

  const updateOrder = (id,orderData) => {
    dispatch(updateOrderThunk({id,orderData}));
  };

    useEffect(() => {
      if (order_id) {
        dispatch(getOrders(order_id)); 
      }
      if (id) {
        dispatch(getOrderById(id));
      }
    }, [dispatch]);

  return { currentOrder, loading, error, createOrder, orderData, updateOrder, status };
};

export default useOrder;
