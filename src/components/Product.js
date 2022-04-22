import React from 'react';
//GRAPHQL
import gql from 'graphql-tag';
import { graphql } from '@apollo/react-hoc';


const getProductById = gql`
    query {
        product(id: "xbox-series-s") {
            name
        }
    }
`;


class Product extends React.Component {
    render() {
        if(
            !(this.props.data.product)
        ) {
            return (
                <div> Loading . . .</div> 
            )
        }


        return (
            <h1> {this.props.data.product.name} </h1>
        )
    }
}


export default graphql(getProductById)(Product);