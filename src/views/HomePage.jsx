import { Component } from "react";
import { UserService } from '../services/user.service.js'
import { BitcoinService } from "../services/bitcoin.service.js";
import MoveList from "../cmps/MoveList.jsx";

export class HomePage extends Component {

    state = {
        bitcoinRate: 0,
        user: null,
    }

    async componentDidMount() {
        const user = await UserService.getUser()
        const bitcoinRate = await BitcoinService.getRate(user.coins)
        this.setState({ user , bitcoinRate})
    }
    
    render() {
       const {bitcoinRate,user} = this.state 
       const title = 'Your last three Moves'
       if(!user) return 
       return (
        <article className="home-page-container">
          <div className="user-details">
            <h1>Hello {user.name}</h1>
            <h2><img className="bitcoin-img" src="../styles/imgs/SL_0212121_40670_39.jpg" alt="" /> coins: {user.coins}$</h2>
            <h2>BTC: {bitcoinRate}</h2> 
          </div>

          <section className="moves-list">
            <MoveList title={title} moves={user.moves.splice(0,3)} />
          </section>

        </article>
        )
    }
}