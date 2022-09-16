import {useEffect, useState} from 'react';
import appTextos from '../mocks/textosApp';

const useTextos = () => {
  const [textos, setTextos] = useState(appTextos);

  useEffect(() => {
    setTextos(appTextos);
  }, []);

  return textos;
};
export default useTextos;
