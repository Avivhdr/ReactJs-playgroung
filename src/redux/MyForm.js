/* eslint-disable */


import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

// create new, "configured" function
// let createReduxForm = reduxForm({ form: 'contact' })

// evaluate it for ContactForm component
// ContactForm = createReduxForm( ContactForm )

// or :
ContactForm = reduxForm({ form: 'contact' })(ContactForm)

export default ContactForm;