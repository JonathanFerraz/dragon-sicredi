import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

export default function useRedirect() {
  const history = useHistory();
  const redirect = useCallback(
    to =>
      setTimeout(() => {
        history.push(to);
      }, 500),
    [history],
  );
  return redirect;
}
