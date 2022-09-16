import api from '../api';

export const getUsuario = async username => {
  try {
    const resultado = await api.get(username);
    return resultado.data;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export const getRepositorio = async username => {
  try {
    const resultado = await api.get(username + '/repos');
    return resultado.data;
  } catch (error) {
    console.erro(error);
    return {};
  }
};
