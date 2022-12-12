import React from "react";
import { Text, View } from "react-native";

const ResultsShowScreen = ({navigation})=> {
    const item = navigation.getParam('item')

    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    )
}

export default ResultsShowScreen