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

const ErrorDiv = styled.div`
color: red;
padding: .5em 0 0 0;
`
export default function CreateClass(props) {
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
                    <h2>Create a Class</h2>
                    <Form
                        onSubmit={onSubmit}
                    >
                        <ErrorDiv>
                            {errors.class_name}
                        </ErrorDiv>
                        <label>Enter a class name:&nbsp;
                            <Input
                                value={values.class_name}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Class name'
                                name='class_name'
                            />
                        </label>
                        <ErrorDiv>
                            {errors.instructor_name}
                        </ErrorDiv>
                        <label>Enter an Instructor Name:&nbsp;
                            <Input
                                value={values.instructor_name}
                                onChange={onInputChange}
                                type='text'
                                placeholder='Instructor Name'
                                name='instructor_name'
                            />
                        </label>

                        <ErrorDiv>
                            {errors.class_type}
                        </ErrorDiv>
                        <label>Select a class type:&nbsp;</label>
                        <select
                            onChange={onInputChange}
                            value={values.class_type}
                            name='class_type'
                        >
                            <option>--  select class type  --</option>
                            <option name='cardio'>Cardio</option>
                            <option name='weights'>Weights</option>
                        </select>

                        <ErrorDiv>
                            {errors.date_time}
                        </ErrorDiv>
                        <label>Select a Day and Time:&nbsp;</label>
                        <Input
                            onChange={onInputChange}
                            value={values.date_time}
                            name='date_time'
                            type='text'
                            placeholder='mm/dd/yyyy tt AM/PM'
                        />

                        <ErrorDiv>
                            {errors.duration}
                        </ErrorDiv>
                        <label>Select a duration:&nbsp;</label>
                        <select
                            onChange={onInputChange}
                            value={values.duration}
                            name='duration'
                            type='text'
                        >
                            <option value='0'>-- class duration  --</option>
                            <option value='.5'>30 Minutes</option>
                            <option value='1'>1 Hour</option>
                            <option value='1.5'>1.5 Hours</option>
                            <option value='2'>2 Hours</option>
                        </select>

                        <ErrorDiv>
                            {errors.intensity_level}
                        </ErrorDiv>
                        <label>Select an intensity level:&nbsp;</label>
                        <select
                            onChange={onInputChange}
                            value={values.intensity_level}
                            name='intensity_level'
                            type='text'
                        >
                            <option >--  class intensity  --</option>
                            <option value='low'>Low</option>
                            <option value='medium'>Medium</option>
                            <option value='high'>High</option>
                        </select>

                        <ErrorDiv>
                            {errors.location}
                        </ErrorDiv>
                        <label>Select a location:&nbsp;</label>
                        <select
                            onChange={onInputChange}
                            value={values.location}
                            name='location'
                            type='text'
                        >
                            <option >--  class location  --</option>
                            <option value='123 west ave'>123 West Ave.</option>
                            <option value='456 south st'>456 South St.</option>
                            <option value='789 east blvd'>789 East Blvd.</option>
                        </select>

                        <ErrorDiv>
                            {errors.current_members}
                        </ErrorDiv>
                        <label>Enter current members:&nbsp;
                            <Input
                                value={values.current_members}
                                onChange={onInputChange}
                                type='number'
                                min='0'
                                placeholder='0'
                                name='current_members'
                            />
                        </label>

                        <ErrorDiv>
                            {errors.max_members}
                        </ErrorDiv>
                        <label>Enter maximum members:&nbsp;
                            <Input
                                value={values.max_members}
                                onChange={onInputChange}
                                type='number'
                                min='0'
                                placeholder='0'
                                name='max_members'
                            />
                        </label>
                        <Button disabled={disabled}>Submit</Button >
                    </Form>
                </LoginCard>
            </TopLevelDiv>
            {/* <Link to={`/SignInPage`}>Sign In</Link> */}
        </div >
    )
}