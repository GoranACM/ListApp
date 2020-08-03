import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Item = (props) => {
    return(
        <View style={ itemStyle.item }>
            <Text style={ itemStyle.text }>{ props.category }</Text>
            <Text style={ itemStyle.text }>{ props.amount }</Text>
        </View>
    )
}

const itemStyle = StyleSheet.create({
    item: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        color: 'black',
    }
})
