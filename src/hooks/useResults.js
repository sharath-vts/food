import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async ()=> {
        console.log("hey man");
        setErrorMessage('')
        try {
            const resposne = yelp.get('/get_memes')
            setResults((await resposne).data.data.memes)
        } catch (error) {
            setErrorMessage('Something went wrong')
        }
    }

    useEffect(() => {
        searchApi()
    }, [])

    return [searchApi, results, errorMessage]
}