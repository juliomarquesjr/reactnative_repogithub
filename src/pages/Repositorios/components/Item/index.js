import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import estilos from './estilos';

const Item = ({titulo = 'N/A', descricao, data}) => {
  return (
    <>
      <View style={estilos.boxDefault}>
        <View>
          <Text style={estilos.tituloRepositorio}>{titulo}</Text>
          <Text style={estilos.textoRepositorios}>
            {descricao == null ? 'Sem descrição' : descricao}
          </Text>
          <Text style={estilos.textoRepositorios}>{data}</Text>
        </View>

        <TouchableOpacity disabled={false}>
          <Icon style={estilos.icone} name="arrow-right" size={30} />
        </TouchableOpacity>
      </View>
      <View style={estilos.linhaDivisoria} />
    </>
  );
};
export default Item;
