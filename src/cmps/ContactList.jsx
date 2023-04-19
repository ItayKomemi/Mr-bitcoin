import { ContactPreview } from "./ContactPreview"

export function ContactList({contacts, onRemoveContact}) {

    return(
        <section>
            <ul className="contact-container">
            {contacts.map(contact =>
            <ContactPreview key={contact._id} contact={contact} onRemoveContact={onRemoveContact} />)
            }
            </ul>
        </section>
    )

}