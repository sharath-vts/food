import react from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = (props)=> {
    return (
        <View>
            <Text style = {styles.titelStyle}>{props.title}</Text>
            <FlatList 
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                data={props.results}
                keyExtractor = {result => result.id}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity onPress={() => props.navigation.navigate('ResultsShowScreen', {item: item})}>
                            <ResultsDetail result = {item}/>
                        </TouchableOpacity>
                    )
                }}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    titelStyle: {
        fontSize: 18,
        fontWeight:'bold'
    }
})

export default withNavigation(ResultsList)