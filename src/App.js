import React from 'react';
//GRAPHQL
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache } from '@apollo/client';


//COMPONENTS
import CurrenciesList from './components/CurrenciesList';      //GET ALL ITEMS ( example )
import Product from './components/Product';                    //GET ONE ITEM ( example )


const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()
})


class App extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                
                <CurrenciesList/>

                <Product/>

            </ApolloProvider>
        )    
    }
}

export default App;