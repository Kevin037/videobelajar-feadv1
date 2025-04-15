import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassById, getClasses } from '../redux/reducers/classSlice';

const useClass = (filterGroup=null,id=null,limit=0) => {
  const dispatch = useDispatch();
  const {classData, selectedClass} = useSelector((state) => state.class);
  const limitedClass = classData.slice(0,limit);
  const loading = useSelector(state => state.class.loading);
  const error = useSelector(state => state.class.error);

  useEffect(() => {
    dispatch(getClasses(filterGroup));
    if (id) {
      dispatch(fetchClassById(id)); 
    }
  }, [dispatch,filterGroup]);

  return { classData, loading, error, selectedClass, limitedClass};
};

export default useClass;
