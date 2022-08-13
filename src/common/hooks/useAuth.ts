import { selectAuthState } from './../../features/auth/authSlice';
import { AppDispatch } from './../../app/store';
import { useDispatch, useSelector } from 'react-redux';

const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const authState = useSelector(selectAuthState);

  return [authState, dispatch]
}

export default useAuth