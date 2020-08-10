import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { Item } from './components/item';
// third-party components
import RNPickerSelect from 'react-native-picker-select';
import Picker from 'react-native-picker-select';
// custom components

export default class App extends Component {

  state = {
    expenseAmount: 0,
    expenseCategory: ''
  }

  listData = []

  dropdownItems = [
    { label: 'Food', value: 'food' },
    { label: 'Transport', value: 'transport' },
    { label: 'Rent', value: 'rent' },
    { label: 'Grocery', value: 'grocery' },
    { label: 'Entertainment', value: 'entertainment' }
  ]

  render() {
    return (
      <SafeAreaView>
        <View style={styles.main}>
          <Text>Add your expense</Text>
            <TextInput 
              style={ styles.input }
              placeholder= "$ amount" 
              placeholderTextColor= 'red'
              onChangeText={
                text => this.setState({ expenseAmount: parseFloat(text) })
              }
              keyboardType="number-pad"
              ref = { (input) => ( this._textInput = input )}
            />      
            {/* <TextInput style={ styles.input }
              placeholder= "category" 
              placeholderTextColor= 'red'
              onChangeText={
                text => this.setState({ expenseCategory: text })
              }
            /> */}
            <RNPickerSelect
              style = { pickerStyle }
              items = { this.dropdownItems }
              value = { this.state.expenseCategory }
              onValueChange = { value => this.setState({ expenseCategory: value }) }
              useNativeAndroidPickerStyle = { false }
              placeholder = { pickerPlaceholder }
            />
        </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={ this.addItem }>
          <Text style={styles.buttonText} >Add</Text>
        </TouchableOpacity>
      </View>
        
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
  if( 
    isNaN(this.state.expenseAmount) || 
    this.state.expenseAmount == 0 || 
    this.state.expenseCategory == '' ) {
    return;
  }
  let itemId = new Date().getTime().toString()
  let listItem = {
    id: itemId,
    amount: this.state.expenseAmount,
    category: this.state.expenseCategory
  }
  this.listData.push(listItem)
  this.setState({expenseAmount:0, expenseCategory: null})
  this._textInput.clear()
  this._textInput.focus()
}

const colors = {
  primary : 'hsla(330, 38%, 65%, 1)'
}

const pickerPlaceholder = {
  label: 'Select a category...',
  value: null,
  color: 'black'
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
  },
  button: {
    padding: 15,
    backgroundColor: colors.primary
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },

})

const pickerStyle = StyleSheet.create({
  inputIOS: {
    padding: 10,
    margin: 5,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  inputAndroid: {
    padding: 10,
    margin: 5,
    borderColor: colors.primary,
    borderWidth: 1,    
  }
})