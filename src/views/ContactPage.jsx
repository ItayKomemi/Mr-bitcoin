import { Component } from "react";
import { ContactList } from "../cmps/ContactList";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { loadContacts, removeContact ,setFilterBy } from "../store/actions/contact.actions";
import ContactFilter from "../cmps/ContactFilter";

class _ContactPage extends Component {

    componentDidMount() {
        this.props.loadContacts()
    }


    onRemoveContact = async (contactId) => {

        try {
           const res = await this.props.removeContact(contactId)
           console.log('res remove contact', res)
        } catch (err) {
            console.log('error:' , err)
            throw err
        }
    }

    onChangeFilter = (filterBy) => {
        this.props.setFilterBy(filterBy)
        this.props.loadContacts()
    }

    render() {
        const {contacts, filterBy} = this.props
        if(!contacts) return <div>Loading..</div>
        return (
            <div className="contact-page-container">
                <Link to="/contact/edit"><button className="add-contact">Add Contact</button></Link>
                <ContactFilter filterBy={filterBy} onChangeFilter={this.onChangeFilter}/>
                <ContactList contacts={contacts} onRemoveContact={this.onRemoveContact}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contactModule.contacts,
    filterBy: state.contactModule.filterBy
})

const mapDispatchToProps = {
    loadContacts,
    removeContact,
    setFilterBy,
}

export const ContactPage = connect(mapStateToProps, mapDispatchToProps)(_ContactPage)
