import React from 'react';
//GRAPHQL
import gql from 'graphql-tag';
import { graphql } from '@apollo/react-hoc';


const getAllCurrencies = gql`
    query {
        currencies {
            label
            symbol
        }
    }
`;


class CurrenciesList extends React.Component {
    render() {
        if(
            !(this.props.data.currencies)
        ) {
            return (
                <div> Loading . . .</div> 
            )
        }


        return (
            <div>
                {
                    this.props.data.currencies
                    .map((item, i) => (
                        <div key={i}>
                            <div> {item.label} </div>
                            <div> {item.symbol} </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}


export default graphql(getAllCurrencies)(CurrenciesList);