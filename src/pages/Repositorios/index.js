import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';

import Cabecalho from './components/Cabecalho';
import Item from './components/Item';

import estilos from './estilos';

const Repositorios = () => {
  const repos = useRoute().params.dadosRepositorio;

  return (
    <FlatList
      ListHeaderComponent={<Cabecalho />}
      data={repos}
      renderItem={({item}) => <Item titulo={item.name} descricao={item.description} data={item.updated_at} />}
    />
  );
};
export default Repositorios;
