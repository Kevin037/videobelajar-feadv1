import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTutors } from '../redux/reducers/tutorSlice';

const useTutor = (class_id=null) => {
  const dispatch = useDispatch();
  const {tutorData} = useSelector((state) => state.tutor);
  const loading = useSelector(state => state.class.loading);
  const error = useSelector(state => state.class.error);

  useEffect(() => {
    dispatch(getTutors(class_id));
  }, [dispatch]);

  return { tutorData, loading, error};
};

export default useTutor;
