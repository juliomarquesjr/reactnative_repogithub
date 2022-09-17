import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';
import useTextos from '../../hooks/useTextos';

import Icon from 'react-native-vector-icons/FontAwesome';

import estilos from './estilos';
import {getRepositorio, getUsuario} from '../../services/requisicoes/gitHub';

const Home = ({navigation}) => {
  const textos = useTextos().home;
  const [usuario, setUsuario] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function consultaUsuario() {
    if (usuario == '') {
      Alert.alert(textos.alertTitulo, textos.alertTexto);
    } else {
      const dados = await getUsuario(usuario).then(setCarregando(true));

      if (dados != false) {
        const repositorios = await getRepositorio(usuario);
        navigation.navigate('Repositorios', {
          dadosUsuario: dados,
          dadosRepositorio: repositorios,
        });

        setCarregando(false); //Desativa o loading do botão e habilita o mesmo
      } else {
        Alert.alert(textos.alertTitulo, textos.alertTexto);
        setCarregando(false); //Desativa o loading do botão e habilita o mesmo
      }
    }
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
        disabled={carregando}
        style={estilos.btnBuscar}
        onPress={() => consultaUsuario()}>
        {carregando && (
          <ActivityIndicator
            style={{marginRight: 8}}
            size={26}
            color="#889195"
          />
        )}
        <Text style={estilos.btnTexto}>{textos.botao}</Text>
      </TouchableOpacity>
    </>
  );
};
export default Home;
