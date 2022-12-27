import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useThunk = (thunk) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback((arg) => {
    setLoading(true);
    dispatch(thunk(arg))
      .unwrap()
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  });

  return [runThunk, loading, error];
};
