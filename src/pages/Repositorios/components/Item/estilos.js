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
  linhaDivisoria: {
    flex: 1,
    height: 3,
    backgroundColor: '#E5E5E5',
    width: '55%',
    alignSelf: 'center',
    marginTop: 20,
  },
});
export default estilos;
