import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Image, View, Text} from 'react-native';
import useTextos from '../../../../hooks/useTextos';

import estilos from './estilos';

const Cabecalho = () => {
  const textos = useTextos().repositorios;
  const dadosUsuario = useRoute().params.dadosUsuario;

  return (
    <View style={estilos.boxDefault}>
      <View style={estilos.cabecalho}>
        <Image source={{uri: dadosUsuario.avatar_url}} style={estilos.avatar} />
        <View style={estilos.cabecalhoCaixas}>
          <Text style={estilos.cabecalhoTitulos}>{textos.seguindo}</Text>
          <Text style={estilos.cabecalhoTextos}>{dadosUsuario.following}</Text>
        </View>
        <View style={estilos.cabecalhoCaixas}>
          <Text style={estilos.cabecalhoTitulos}>{textos.seguidores}</Text>
          <Text style={estilos.cabecalhoTextos}>{dadosUsuario.followers}</Text>
        </View>
      </View>

      <View style={estilos.boxBio}>
        <Text style={estilos.username}>{dadosUsuario.name}</Text>
        <Text style={estilos.bio}>{dadosUsuario.login}</Text>
        {dadosUsuario.bio && (
          <Text style={estilos.bio}>{dadosUsuario.bio}</Text>
        )}
        {dadosUsuario.location && (
          <Text style={estilos.bio}>{dadosUsuario.location}</Text>
        )}
        {dadosUsuario.company && (
          <Text style={estilos.bio}>{dadosUsuario.company}</Text>
        )}
        {dadosUsuario.site_admin && (
          <Text style={estilos.bio}>{dadosUsuario.site_admin}</Text>
        )}

        <Text style={estilos.bioRepositorios}>
          {dadosUsuario.public_repos} {textos.repositorios} -{' '}
          {dadosUsuario.public_gists} {textos.gits}
        </Text>
      </View>

      <Text style={estilos.listaRepositorios}>{textos.listaRepositorios}</Text>
    </View>
  );
};
export default Cabecalho;
