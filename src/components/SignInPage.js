import React from 'react'
import styled from 'styled-components'
//////// Style Variables ////////
const cardSize = '30em'
const primaryColor = 'darkgray'
const secondaryColor = 'lightgray'
const margin = '10px'
const flex = `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0 auto;
    `
//////// Styled Components ////////
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
export default function SignInPage(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        disabled,
        errors,
    } = props
    return (
        <TopLevelDiv>
            <LoginCard>
                <h2>Sign In</h2>
                <Form
                    onSubmit={onSubmit}
                >
                    <div className='errors'>
                        <div>{errors.name}</div>
                    </div>
                    <label>Enter your Username:&nbsp;
                    <Input
                            value={values.username}
                            onChange={onInputChange}
                            type='text'
                            placeholder='Username'
                            name='username'
                        >
                        </Input>
                    </label>
                    <div className='errors'>
                        <div>{errors.password}</div>
                    </div>
                    <label>Enter your password:&nbsp;
                    <Input
                            value={values.password}
                            onChange={onInputChange}
                            type='text'
                            placeholder='Password'
                            name='password'
                        >
                        </Input>
                    </label>
                    <Button disabled={disabled}>Login</Button >
                </Form>
            </LoginCard>
        </TopLevelDiv>
    )
}