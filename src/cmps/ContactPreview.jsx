import { Link } from "react-router-dom";

export function ContactPreview({contact, onRemoveContact}) {

    return(
        <article className="contact-preview">
        <section className="actions">
            <Link className="edit" to={`/contact/edit/${contact._id}`} ><button>Edit</button></Link>
            <button className="delete-btn" onClick={() => onRemoveContact(contact._id)}>X</button>
        </section>
        <Link to={`/contact/${contact._id}`} className="contact-card">
            <img src={`https://robohash.org/${contact._id}`} alt={contact.name} />
            <br></br>
            <span>{contact.name}</span>
        </Link>
        </article>
    )

}