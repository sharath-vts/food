import React, { useState } from "react";  
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather} from '@expo/vector-icons'

const Searchbar = ({searchText, onSearchTextChanged, onSearchEnded})=> {
    return (
        <View style= {styles.parentStyle}>
            <Feather 
                name= 'search'
                style= {styles.icon}
            ></Feather>
            <TextInput 
                style = {styles.textInput}
                placeholder="Search"
                value = {searchText}
                onChangeText = {onSearchTextChanged}
                autoCapitalize = 'none'
                onEndEditing={onSearchEnded}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    parentStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row'
    },

    icon: {
        fontSize: 32,
        alignSelf: 'center',
        marginHorizontal: 8
    },

    textInput: {
        flex: 1,
        fontSize: 18,
    }
})

export default Searchbar