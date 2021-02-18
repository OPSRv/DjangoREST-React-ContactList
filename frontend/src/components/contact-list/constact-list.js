import React, { Fragment } from "react";
import "./contact-list.css";

import ContactItem from "./contact-item/contact-item";

const ContactList = ({
  ContactList,
  isStar,
  editContact,
  onDeleteContact,
  addContact,
}) => {
  const list = ContactList.map((item) => {
    return (
      <ContactItem
        key={item.id}
        name={item.name}
        gender={item.gender}
        address={item.address}
        image={item.image}
        phone={item.phone}
        email={item.email}
        star={item.star}
        user_id={item.user_id}
        isStar={() => isStar(item.id)}
        editContact={() => editContact(item.id)}
        onDeleteContact={() => onDeleteContact(item.id)}
        addContact={() => addContact(item.id)}
      />
    );
  });
  console.log(ContactList, "ContactList");
  return (
    <Fragment>
      <div class="cards">
        {list.length !== 0 ? list : <h2>Contact list is empty</h2>}
      </div>
    </Fragment>
  );
};

export default ContactList;
