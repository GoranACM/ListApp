import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Item = (props) => {
    return(
        <View style={ itemStyle.item }>
            <View>
                <Text style={ itemStyle.text }>{ props.category }</Text>
                <Text style={ itemStyle.text }>{ props.amount }</Text>
            </View>
            <TouchableOpacity style={styles.icon} onPress={ () => { props.delete( props.id ) }}>
                <Image source={require('../assets/trash-alt-solid.png')}></Image>
            </TouchableOpacity>
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
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    icon: {
        width: 20,
        height: 20,
    }
})
