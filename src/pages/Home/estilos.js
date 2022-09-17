import {StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
  titulo: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 38,
    fontWeight: 'bold',
  },
  boxPesquisa: {
    backgroundColor: '#D6E3E2',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 24,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 16,
  },
  inputPesquisa: {
    paddingLeft: 20,
    fontSize: 14,
    lineHeight: 22,
    height: 52,
  },
  iconPesquisa: {
    marginRight: 24,
    color: "#889195",
  },
  btnBuscar: {
    flexDirection: 'row',
    backgroundColor: '#3A3F47',
    height: 52,
    width: 250,
    borderRadius: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 24,
  },
  btnTexto: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default estilos;
