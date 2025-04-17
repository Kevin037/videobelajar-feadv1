import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassById, getClasses } from '../redux/reducers/classSlice';

const useClass = (type=null,id=null,limit=0,enabled = true) => {
  const dispatch = useDispatch();
  const {classData, selectedClass} = useSelector((state) => state.class);
  const limitedClass = classData.slice(0,limit);
  const loading = useSelector(state => state.class.loading);
  const error = useSelector(state => state.class.error);

  useEffect(() => {
    if (!enabled) return;
    const columnName = type ? 'group' : null;
    dispatch(getClasses({type,columnName}));
    if (id) {
      dispatch(fetchClassById(id)); 
    }
  }, [dispatch,type]);

  return { classData, loading, error, selectedClass, limitedClass};
};

export default useClass;
