import React from 'react'
import { Formik } from 'formik'
import validate from './validate'
import getValidationSchema from './getValidationSchema'
import './SignUpForm.css'

const initialValues = {
  name: '',
  password: '',
  age: '',
  gender: '',
}

export default function SignUpFormContainer() {
  return (
    <Formik 
      initialValues={initialValues}
      validate={validate(getValidationSchema)}
      onSubmit={onSubmit}
      render={SignUpForm}
    />
  )
}

function SignUpForm(props) {
  const { 
    isSubmitting,
    errors, 
    handleChange, 
    handleSubmit 
  } = props

  return (
    <div className="form">
      <label className='form-field' htmlFor="name">
        <span>Name:*</span>
        <input className="form-input" name="name" type="text" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.name}</div>
      
      <label className="form-field" htmlFor="password">
        <span>Password:*</span>
        <input className="form-input" name='password' type="password" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.password}</div>

      <label className="form-field" htmlFor="age">
        <span>Age:</span>
        <input className="form-input" name='age' type="number" min="1" max="110" onChange={handleChange} />
      </label>
      <div className="form-field-error">{errors.age}</div>

      <label className="form-field" htmlFor="gender">
        <span>Gender:</span>        
        <label htmlFor="male">
          <input type="radio" name="gender" value="male" id="male" onChange={handleChange}/>Male
        </label>
        <label htmlFor="female">
          <input type="radio" name="gender" value="female" id="female" onChange={handleChange}/>Female
        </label>        
      </label>

      <button className="form-button" onClick={handleSubmit}>{isSubmitting ? 'Loading' : 'Sign Up'}</button>
    </div>
  )
}

function onSubmit(values, {setSubmitting, setErrors }) {
  setTimeout(() => {
    alert('Username: '+values.name+'\nPassword:'+values.password+'registered. Check on console')
    console.log('Registered',values)
    setSubmitting(false)
  }, 2000)
}
