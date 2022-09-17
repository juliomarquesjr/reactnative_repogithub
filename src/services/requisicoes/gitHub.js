import api from '../api';

export const getUsuario = async username => {
  try {
    const resultado = await api.get(username);
    return resultado.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getRepositorio = async username => {
  try {
    const resultado = await api.get(username + '/repos');
    return resultado.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
