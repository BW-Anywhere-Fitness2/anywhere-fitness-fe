import React from 'react'
import styled from 'styled-components'
import Home from './Home'

//////////////// Style Variables ////////////////
const cardSize = '30em'
const primaryColor = '#DDBEA9'
const secondaryColor = '#A5A58D'
const margin = '10px'
const flex = `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0 auto;
    `
//////////////// Styled Components ////////////////
const LoginCard = styled.div`
    ${flex};
    width: ${cardSize};
    background-color: ${secondaryColor};
    `
const TopLevelDiv = styled.div`
    ${flex};
    background-color: ${primaryColor};
    `
const Form = styled.form`
    ${flex}
`
const Input = styled.input`
    ${flex};
    margin: ${margin}
`
const Button = styled.button`
    margin: ${margin};
`
export default function SignUpPage(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        disabled,
        errors,
    } = props
    return (
        <div>
            {/* <Home /> */}
            <TopLevelDiv>
                <LoginCard>
                    <h2>Sign Up</h2>
                    <Form
                        onSubmit={onSubmit}
                    >
                        <div className='errors'>
                            <div>{errors.name}</div>
                            <div>{errors.email}</div>
                            <div>{errors.password}</div>
                            <div>{errors.role}</div>
                        </div>
                        <label>Enter your name:&nbsp;
                        <Input
                                value={values.name}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Name'
                                name='name'
                            >

                            </Input>
                        </label>
                        <label>Enter your E-mail:&nbsp;
                        <Input
                                value={values.email}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Email'
                                name='email'
                            >
                            </Input>
                        </label>
                        <label>Choose a password:&nbsp;
                            <Input
                                value={values.password}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Password'
                                name='password'
                            >
                            </Input>
                        </label>
                        <label>Select a roll:&nbsp;</label>
                        <select
                            onChange={onInputChange}
                            value={values.role}
                            name='role'
                        >
                            <option>-- please select role --</option>
                            <option name='client'>Client</option>
                            <option name='instructor'>Instructor</option>
                        </select>

                        <Button disabled={disabled}>Submit</Button >
                    </Form>
                </LoginCard>
            </TopLevelDiv>
            {/* <Link to={`/SignInPage`}>Sign In</Link> */}
        </div >
    )
}