import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Button } from 'react-native';
import { Item } from './components/item';

export default class App extends Component {

  state = {
    expenseAmount: 0,
    expenseCategory: ''
  }

  listData = [
    { id: '1', amount: 50, category: 'Food' },
    { id: '2', amount: 150, category: 'Groceries' },
    { id: '3', amount: 30, category: 'Transport' },
  ]

  render() {
    return (
      <SafeAreaView style={styles.main}>
      <Text>Add your expense</Text>
      <TextInput style={ styles.input }
        placeholder= "$ amount" 
        placeholderTextColor= 'red'
        onChangeText={
          text => this.setState({ expenseAmount: parseFloat(text) })
        }
        keyboardType="number-pad"
      />      
      <TextInput style={ styles.input }
        placeholder= "category" 
        placeholderTextColor= 'red'
        onChangeText={
          text => this.setState({ expenseCategory: text })
        }
      />
      <Button title="ADD" onPress={ () => addItem() }/>
        <FlatList
          data={ this.listData }
          renderItem={ this.renderList }
          keyExtractor={ item => item.id }
          extraData={ this.state.expenseAmount }
        />
      </SafeAreaView>
    )
  }

  renderList = ({ item }) => (
    <Item amount={ item.amount } category={ item.category }/>
  )
}

addItem = () => {
  if (isNaN(this.state.expenseAmount) || this.state.expenseAmount == 0) 
  {
    return;
  }
  let itemId = new Date().getTime().toString()
  let item = {
    id: itemId,
    amount: this.state.expenseAmount,
    category: this.state.expenseCategory
  }
  this.listData.push(item)
  this.setState({expenseAmount: 0})
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 15,
  }
})