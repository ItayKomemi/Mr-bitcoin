import { Component } from "react";
import { contactService } from "../services/contact.service";
import { UserService } from "../services/user.service";
import TransferFund from "../cmps/TransferFund";
import MoveList from "../cmps/MoveList";

export class ContactDetails extends Component {

    state = {
        contact: null,
        loggedInUser: UserService.getUser()
    }

    componentDidMount() {
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }
    
    loadContact = async () => {
        try {
            const contact = await contactService.getContactById(this.props.match.params.id)
            this.setState({ contact })
        } catch (err) {
            console.log('err:', err)
        }
    }

    onBack = () => {
        this.props.history.push('/contact')
    }

    onTransferCoins = (amount) => {
       const updatedUser = UserService.addMove(this.state.contact,amount)
        this.setState({loggedInUser: updatedUser})
    }

    get userMoves() {
        const {loggedInUser, contact} = this.state
        return loggedInUser.moves.filter(move => move.toId === contact._id)
    }

    render() {
        const {contact} = this.state
        const {loggedInUser} = this.state
        const title = 'Your Moves'
        if (!contact) return
        return (
            <section className='contact-details'>
                <button className="back-btn" onClick={this.onBack}>Back</button>
                <h3>Name: <span className="user-data">{contact.name}</span></h3>
                <h3>Email: <span className="user-data">{contact.email}</span></h3>
                <h3>Phone: <span className="user-data">{contact.phone}</span></h3>
            {loggedInUser ?
            <section className="transfer-funds-move-list">
                <TransferFund username={contact.name} maxCoins={loggedInUser.coins} onTransferCoins={this.onTransferCoins}/>
                <MoveList title={title} moves={this.userMoves}  />
            </section>
             :(
                <h3>Log in to transfer funds</h3>
                )
            }
            <img src={`https://robohash.org/${contact._id}`}alt="contact-img"  />
            {/* <Link to="/contact">Next Contact</Link> */}
        </section>
        )
    }
}