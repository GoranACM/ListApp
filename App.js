import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { Item } from './components/item';

export default class App extends Component {

  listData = [
    { id: '1', amount: 50, category: 'Food' },
    { id: '2', amount: 150, category: 'Groceries' },
    { id: '3', amount: 30, category: 'Transport' },
  ]

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <FlatList
          data={ this.listData }
          renderItem={ this.renderList }
          keyExtractor={ item => item.id }
        />
      </SafeAreaView>
    )
  }

  renderList = ({ item }) => (
    <Item amount={ item.amount } category={ item.category }/>
  )
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 10,
  }
})