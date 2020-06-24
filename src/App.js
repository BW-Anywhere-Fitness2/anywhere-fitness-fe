import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios';
import * as Yup from 'yup'
import formSchema from './validation/formSchema'
import formSchemaK from './validation/formSchemaK'

import Nav from './components/Nav'
import Home from './components/Home'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import Directory from './components/Directory'

//////////////// Initial Values ////////////////
const initialValues = {
  name: '',
  email: '',
  password: '',
  role: ''
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  role: ''
}

const initialValuesK = {
  name: '',
  password: '',

}

const initialFormErrorsK = {
  name: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true
const initialUsersK = []
const initialDisabledK = true
const initialClasses = []

//////////////// Application ////////////////
function App() {
  //////////////// State ////////////////
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [classes, setClasses] = useState(initialClasses)

  //////////////// HELPERS ////////////////
  const getClasses = () => {
    axios.get('/')
      .then(res => {
        setClasses(res.data.classes)
      })
      .catch(err => {
        console.log('the data was not returned', err)
      })
  }

  const getUsers = () => {
    axios.get('/')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        debugger
      })
  }

  const postNewUser = newUser => {
    axios.post('https://bw-anywhere-fitness-be.herokuapp.com/api/auth/register', newUser)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialValues)
      })
  }
  //////////////// EVENT HANDLERS ////////////////
  const onInputChange = evt => {
    const { name, value } = evt.target
    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      role: formValues.role,
    }
    postNewUser(newUser)
  }
  //////////////// SIDE EFFECTS //////////////// 
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])

  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////

  //////////////// State ////////////////
  const [usersK, setUsersK] = useState(initialUsersK);
  const [formValuesK, setFormValuesK] = useState(initialValuesK);
  const [formErrorsK, setFormErrorsK] = useState(initialFormErrorsK);
  const [disabledK, setDisabledK] = useState(initialDisabledK);

  ////////////// HELPERS ////////////////

  const getUsersK = () => {
    axios.get('/')
      .then(res => {
        setUsersK(res.data)
      })
      .catch(err => {
        debugger
      })
  }

  const postNewUserK = newUserK => {
    axios.post('https://bw-anywhere-fitness-be.herokuapp.com/api/auth/login', newUserK)
      .then(res => {
        setUsers([...usersK, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialValuesK)

      })
  }
  //////////////// EVENT HANDLERS ////////////////
  const onInputChangeK = evt => {
    const { name, value } = evt.target
    Yup
      .reach(formSchemaK, name)
      .validate(value)
      .then(valid => {
        setFormErrorsK({
          ...formErrorsK,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrorsK({
          ...formErrorsK,
          [name]: err.errors[0]
        })
      })
    setFormValuesK({
      ...formValuesK,
      [name]: value
    })
  }

  const onSubmitK = evt => {
    evt.preventDefault()

    const newUserK = {
      name: formValuesK.name.trim(),
      password: formValuesK.password.trim(),

    }
    postNewUserK(newUserK)
  }
  //////////////// SIDE EFFECTS //////////////// 
  useEffect(() => {
    getUsersK()
  }, [])

  useEffect(() => {
    formSchemaK.isValid(formValuesK).then(valid => {
      setDisabledK(!valid);
    })
  }, [formValuesK])
  return (
    < div >
      <Nav />
      <Switch>
        <Route path='/SignUp'>
          <SignUpPage
            values={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path='/SignIn'>
          <SignInPage
            values={formValuesK}
            onInputChange={onInputChangeK}
            onSubmit={onSubmitK}
            disabled={disabledK}
            errors={formErrorsK}
          />
        </Route>
        <Route path='/directory'>
          <Directory
            classes={classes}
            instructors={users}
            clients={usersK} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
