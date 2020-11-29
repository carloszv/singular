import styled from 'styled-components'

export const Outer = styled.footer`
    display: flex;
    justify-content: 'center',
    align-items: 'center',
    border-top: 2px solid var(--color-box-background);
    width: 100%;
    margin-top: 20px;
`

export const Powered = styled.div`
    width: 100%;
    display: block;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    height: 40px;
    justify-content: center;

    p {
        margin: 0;
    }

    a {
        &:hover {
        color: #b39db7;
        }
    }
`