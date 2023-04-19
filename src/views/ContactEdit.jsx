import React, { Component } from "react"
import { contactService } from "../services/contact.service"

export class ContactEdit extends Component {
  state = {
    contact: contactService.getEmptyContact(),
  }

  async componentDidMount() {
    const contactId = this.props.match.params.id
    if (contactId) {
      try {
        const contact = await contactService.getContactById(contactId)
        this.setState({ contact })
      } catch (err) {
        console.log("error:", err)
        throw err
      }
    }
  }

  onSaveContact = async (ev) => {
    ev.preventDefault()

    try {
      await contactService.saveContact({ ...this.state.contact })
      this.props.history.push("/contact")
    } catch (err) {
      console.log("error:", err)
    }
  }

  handleChange = ({ target }) => {
    const field = target.name
    let value = target.value

    switch (target.type) {
        case 'number':
        case 'range':
            value = +value
            break;
        case 'checkbox':
            value = target.checked
            break;
    }
    this.setState(({ contact }) => ({ contact: { ...contact, [field]: value } }))
}
  

  render() {
    const { contact } = this.state
    const {name , phone , email} = contact
    return (
      <section className="contact-edit">
        <h1>{contact._id ? "Edit" : "Add"} contact</h1>

        <form onSubmit={this.onSaveContact} className="edit-form">
          
          <label htmlFor="name">Contact name: </label>
          <input value={name} onChange={this.handleChange} type="text" name="name" id="name"/>
          
          <label htmlFor="phone">Contact phone number: </label>
          <input value={phone} onChange={this.handleChange} type="text" name="phone" id="phone"/>
          
          <label htmlFor="email">Contact email: </label>
          <input value={email} onChange={this.handleChange} type="text" name="email" id="email"/>
          
          <button>Save</button>
        </form>
      </section>
    )
  }
}
