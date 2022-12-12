import React, {useState } from "react";  
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ResultsList from "../components/ResultsList";
import Searchbar from '../components/Searchbar'
import useResults from "../hooks/useResults";

const SearchScreen = ({navigation})=> {
    const [searchText, setSearchText] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByType = (type) => {
        return results.filter(result => {
            return result.box_count == type
        })

    }
    return (
        <View style= {styles.container}>
            <Searchbar 
                searchText = {searchText}
                onSearchTextChanged = {setSearchText}
                onSearchEnded = { searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We've found {results.length} results</Text>
            <ScrollView>
                <ResultsList 
                    title = 'Cost Effective'
                    results = {filterResultsByType(2)}
                    // navigation = {navigation}
                />
                <ResultsList 
                    title = 'Bit Pricier'
                    results = {filterResultsByType(3)}
                    // navigation = {navigation}
                />
                <ResultsList 
                    title = 'Bit Spender'
                    // navigation = {navigation}
                    results = {filterResultsByType(5)}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
})

export default SearchScreen