import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import useTextos from '../../hooks/useTextos';

import Icon from 'react-native-vector-icons/FontAwesome';

import estilos from './estilos';
import {getRepositorio, getUsuario} from '../../services/requisicoes/gitHub';

const Home = ({navigation}) => {
  const textos = useTextos().home;
  const [usuario, setUsuario] = useState();

  async function consultaUsuario() {
    const dados = await getUsuario(usuario);
    const repositorios = await getRepositorio(usuario);

    navigation.navigate('Repositorios', {
      dadosUsuario: dados,
      dadosRepositorio: repositorios,
    });
  }

  return (
    <>
      <Text style={estilos.titulo}>{textos.titulo}</Text>
      <View style={estilos.boxPesquisa}>
        <TextInput
          style={estilos.inputPesquisa}
          autoCapitalize="none"
          placeholder={textos.placeholder}
          value={usuario}
          onChangeText={setUsuario}
        />
        <TouchableOpacity>
          <Icon style={estilos.iconPesquisa} name="search" size={20} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={estilos.btnBuscar}
        onPress={() => consultaUsuario()}>
        <Text style={estilos.btnTexto}>{textos.botao}</Text>
      </TouchableOpacity>
    </>
  );
};
export default Home;
