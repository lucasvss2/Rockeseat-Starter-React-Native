/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React,{Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import api from '../../services/api';


export default class Home extends Component{
  state={
    docs: [],
  };
  componentDidMount() {
    this.loadProducts();
  }
  loadProducts= async ()=>{
    const response = await api.get('/products');

    const {docs} = response.data;

    this.setState({docs});
  };

  renderItem = ({item}) => (
  <View>
    <Text>{item.title}</Text>
    <Text>{item.description}</Text>
    <TouchableOpacity onPress={() => {}}>
      <Text>Acessar</Text>
    </TouchableOpacity>
  </View>
  )

  render(){
    return (
      <View>
        <FlatList
        data={this.state.docs}
        keyExtractor={item=>item._id}/* essa função serve para receber cada item
        novamente e retorna o campo único de cada item */
        renderItem={this.renderItem}/* função para renderizar cada um dos itens
        da lista criada anteriormente*/
        />


    </View>
    );
  }
}

