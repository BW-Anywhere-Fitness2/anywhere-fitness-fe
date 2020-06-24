import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios';
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

import formSchema from './validation/formSchema'
import formSchemaK from './validation/formSchemaK'
import formSchemaClass from './validation/formSchemaClass'

import Nav from './components/Nav'
import Home from './components/Home'
import SignInPage from './components/SignInPage'
import SignUpPage from './components/SignUpPage'
import Directory from './components/Directory'
import CreateClass from './components/CreateClass'

//////////////// Initial Values ////////////////
const initialValues = {
  name: '',
  username: '',
  email: '',
  password: '',
  role: ''
}

const initialFormErrors = {
  name: '',
  username: '',
  email: '',
  password: '',
  role: ''
}

const initialClassValues = {
  class_name: '',
  instructor_name: '',
  class_type: '',
  date_time: '',
  duration: null, //must be a number and not a string,
  intensity_level: '',
  location: '', //any address as a string
  current_members: null, //must be a number and not a string
  max_members: null, //must be a number and not a string
}

const initialClassErrors = {
  class_name: '',
  instructor_name: '',
  class_type: '',
  date_time: '',
  duration: null, //must be a number and not a string,
  intensity_level: '',
  location: '', //any address as a string
  current_members: null, //must be a number and not a string
  max_members: null, //must be a number and not a string
}

const initialValuesK = {
  username: '',
  password: '',
}

const initialFormErrorsK = {
  username: '',
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
  const [classValues, setClassValues] = useState(initialClassValues)
  const [classErrors, setClassErrors] = useState(initialClassErrors)


  const history = useHistory()
  //////////////// HELPERS ////////////////
  const getClasses = () => {
    axios.get('https://bw-anywhere-fitness-be.herokuapp.com/api/users/classes/')
      .then(res => {
        setClasses(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log('the data was not returned', err)
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

  const postNewClass = newClass => {
    axios.post('https://bw-anywhere-fitness-be.herokuapp.com/api/instructor/classes/', newClass)
      .then(res => {
        setUsers([...classes, res.data])
      })
      .catch(err => {
        debugger
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

  const onInputChangeClass = evt => {
    const { name, value } = evt.target
    Yup
      .reach(formSchemaClass, name)
      .validate(value)
      .then(valid => {
        setClassErrors({
          ...classErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setClassErrors({
          ...classErrors,
          [name]: err.errors[0]
        })
      })
    setClassValues({
      ...classValues,
      [name]: value
    })
  }

  const onSubmitClass = evt => {
    evt.preventDefault()
    const newClass = {
      class_name: classes.class_name,
      instructor_name: classes.instructor_name,
      class_type: classes.class_type,
      date_time: classes.date_time,
      duration: classes.duration,
      intensity_level: classes.intensity_level,
      location: classes.location,
      current_members: classes.current_members,
      max_members: classes.max_members,
    }
    postNewClass(newClass)
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
    getClasses()
  }, [])
  console.log(classes)
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])

  //////////////////////////////////////////////////////////////////////////


  //////////////// State (for logins) ////////////////
  const [usersK, setUsersK] = useState(initialUsersK);
  const [formValuesK, setFormValuesK] = useState(initialValuesK);
  const [formErrorsK, setFormErrorsK] = useState(initialFormErrorsK);
  const [disabledK, setDisabledK] = useState(initialDisabledK);

  ////////////// HELPERS ////////////////

  const logInUser = newUserK => {
    axios.post('https://bw-anywhere-fitness-be.herokuapp.com/api/auth/login', newUserK)
      .then(res => {
        console.log(res.data)
        setUsersK([...usersK, res.data])
        localStorage.setItem('token', res.data.token)
        history.push('/directory')
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
      username: formValuesK.username.trim(),
      password: formValuesK.password.trim(),

    }
    logInUser(newUserK)
  }
  //////////////// SIDE EFFECTS //////////////// 

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
            onInputChange={onInputChangeClass}
            onSubmitClass={onSubmitClass}
            classes={classes}
            instructors={users}
            clients={usersK}
          />
          <CreateClass
            values={classValues}
            onInputChange={onInputChangeClass}
            onSubmit={onSubmitClass}
            classes={classes}
            errors={classErrors}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
