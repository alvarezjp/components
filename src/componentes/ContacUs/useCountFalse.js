import { useEffect } from 'react';

const useCountFalse = (errors, setCountFalse) => {
  useEffect(() => {
    const countFalse = Object.values(errors).filter(
      (error) => error === true
    ).length;
    setCountFalse(countFalse);
  }, [errors, setCountFalse]);
};

export default useCountFalse;