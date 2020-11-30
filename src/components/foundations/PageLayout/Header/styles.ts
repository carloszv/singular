import styled from 'styled-components'

export const Head = styled.header`
  top: 0;
  background: #ffffff;
`

export const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`

export const TopBar = styled.div`
  position: fixed;
  top: 10px;
  right: 20px;
  align-self: flex-end;
`

export const LogoutButton = styled.button`
  color: purple;
  border: 2px solid purple;
  border-radius: 20px;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: purple;
    color: white;
  }
`

export const Logo = styled.img`
  margin-top: 20px;
`