import styled from 'styled-components'

export const Outer = styled.div`
    padding: 0 50px;
    margin-top: 40;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
`

export const Inner = styled.div`
    background: #fff;
    padding: 24;
    height: 450;
    width: 400;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    display: flex;
`


export const InputGroup = styled.div`
    width: 100%;
`

export const Input = styled.input`
    background: white;
    width: 100%;
    color: black;
    font-size: 16px;
    font-weight: 500;
    padding: 15px 15px;
    margin-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid grey;
    transition: border 0.2s ease-in-out;

    &::placeholder {
        font-size: 12px;
        opacity: 0.5;
        padding-left: 10px;
    }

    &:valid {
        border-bottom: 1px solid green;
    }

    &:invalid {
        border: 1px solid red;
    }
`

export const ErrorMessage = styled.span`
    color: red;
    font-size: 16px;
    font-weight: 500;
`

export const ButtonGroupWrapper = styled.div`
    display: block;
    width: 100%;
    justify-items: space-between;
`

export const LoginButton = styled.button`
    border: 2px solid green;
    border-radius: 20px;
    color: green;

    &:hover {
        color: white;
        background-color: green;
    }

    &:focus {
        outline: none;
    }
`

export const RegisterButton = styled.button`
    border: 2px solid blue;
    border-radius: 20px;
    color: blue;

    &:hover {
        color: white;
        background-color: blue;
    }

    &:focus {
        outline: none;
    }
`