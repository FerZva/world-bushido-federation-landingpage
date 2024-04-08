import React from 'react';

const CxDetailsemailtemplate = ({ firstName, lastName, customerEmail, category, age, subscriptionType, purchaseDate }) => (
  <div>
    <h1>Customer purchase details</h1>
    <p>Customer name: <strong>{firstName} {lastName}</strong></p>
    <p>Customer email: {customerEmail}</p>
    <p>Customer category: <strong>{category}</strong></p>
    <p>Customer age: <strong>{age}</strong></p>
    <p>Subscription type: <strong>{subscriptionType}</strong></p>
    <p>Purchase Date: <strong>{purchaseDate}</strong></p>
  </div>
);

export default CxDetailsemailtemplate;
