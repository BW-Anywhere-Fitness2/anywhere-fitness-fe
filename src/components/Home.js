import React from 'react'

import Hero from '../static/FitnessSplash.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './home.css'

const flex = `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0 auto;
    `
const HeroImg = styled.img`
${flex}
width: 70%;
`

const StyledButton = styled.button`
${flex}
color:black;
background-color: lightgray;
border-radius: 6px;
text-decoration: none;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid darkgray;
border-radius: 3px;
cursor: pointer;
`

const StyledHomeContainer = styled.div`
${flex}
`
export default function Home() {
    return (
        <StyledHomeContainer>
            <HeroImg
                src={Hero}
                alt='Various people stretching'
            />
            <Link className="link" to='/SignUp'>
                <StyledButton>
                    Sign Up!
            </StyledButton>
            </Link>
            <Link className="link" to='/SignIn'>
                <StyledButton>
                    Sign In!
            </StyledButton>
            </Link>
        </StyledHomeContainer>
    )
}
