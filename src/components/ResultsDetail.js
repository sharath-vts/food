import react from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ResultsDetail = ({result})=> {
    return (
        <View>
            <Image 
                style = {styles.image}
                source={{uri: result.url}}></Image>
            <Text style = {styles.name}>{result.name}</Text>
            <Text>{result.box_count} count, {result.captions} captions</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 250,
        borderRadius: 4
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})
export default ResultsDetail