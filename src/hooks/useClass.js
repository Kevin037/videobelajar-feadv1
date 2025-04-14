import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClasses } from '../redux/reducers/classSlice';

const useClass = (filterGroup=null) => {
  const dispatch = useDispatch();
  const classData = useSelector(state => state.class.classData);
  const loading = useSelector(state => state.class.loading);
  const error = useSelector(state => state.class.error);

  useEffect(() => {
    dispatch(getClasses(filterGroup));
  }, [dispatch,filterGroup]);

  return { classData, loading, error };
};

export default useClass;
