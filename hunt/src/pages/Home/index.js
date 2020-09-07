/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React,{Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
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
    <View style={style.productContainer}>
    <Text style={style.productTitle}>{item.title}</Text>
    <Text style={style.productDescription}>{item.description}</Text>
    <TouchableOpacity style={style.productButton} onPress={() => {}}>
      <Text style={style.productProductButtonText}>Acessar</Text>
    </TouchableOpacity>
  </View>
  )

  render(){
    return (
      <View style={style.container}>
        <FlatList
          contentContainerStyle={style.list}/* serve para estilizar o conteúdo
          da lista */
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

const style = StyleSheet.create({
  container:{
    backgroundColor: '#fafafa',
  },

  list:{
    padding:20,
  },

  productContainer:{
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius:5,
    padding:20,
    marginBottom:20,
  },

  productTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  productDescription:{
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24,
  },

  productButton:{
    height:42,
    borderRadius:5,
    borderWidth: 2,
    borderColor: '#DA552F',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  productProductButtonText:{
    fontSize: 16,
    color: '#DA552F',
    fontWeight: 'bold',
  },
});
