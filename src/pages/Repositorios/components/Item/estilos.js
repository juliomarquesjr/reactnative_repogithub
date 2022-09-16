import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
  boxDefault: {
    //backgroundColor: 'red',

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,

    alignItems: 'center',
  },
  tituloRepositorio: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textoRepositorios: {
    fontSize: 12,
  },
  icone: {
    backgroundColor: '#E5E5E5',
    color: '#889195',
    padding: 5,
    borderRadius: 16,
  },
});
export default estilos;
