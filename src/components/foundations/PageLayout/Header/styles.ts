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
  display: flex;
  align-self: flex-end;
`

export const LogoutButton = styled.button`
  color: blue;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`

export const Logo = styled.img`
  margin-top: 20px;
`