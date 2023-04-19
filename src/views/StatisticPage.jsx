import React, { Component } from 'react'
import { BitcoinService } from '../services/bitcoin.service'
import  Chart  from '../cmps/Chart'

export class StatisticPage extends Component {

    state = {
        marketPrice: null,
        transactionsData: null,
    }

    componentDidMount() {
        this.loadMarketPrice()
        this.loadMarketTransactions()
    }

    async loadMarketPrice() {
       try {
        const marketPrice = await BitcoinService.getMarketPrice()
        this.setState({marketPrice: marketPrice})
       }
       catch (err) {
        console.log('cannot get market price',err)
        throw err
       } 
    }
    async loadMarketTransactions() {
       try {
        const transactionsData = await BitcoinService.getConfirmedTransactions()
        this.setState({transactionsData: transactionsData})
       }
       catch (err) {
        console.log('cannot get transactions data',err)
        throw err
       } 
    }

    get getMarketValuesY() {
        const {marketPrice} = this.state
        return marketPrice.values.map(v => v.y)
    }
    get getTrasactionsValuesY() {
        const {transactionsData} = this.state
        return transactionsData.values.map(v => v.y)
    }

    render() {
        const {marketPrice, transactionsData} = this.state
        if (!marketPrice && !transactionsData) return <div>Loading...</div>
        return(
            <>
            <Chart marketPrice={this.getMarketValuesY} />
            <Chart transactionsData={this.getTrasactionsValuesY} />
            </>
        )
    }
}
