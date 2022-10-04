import React from 'react'

import styled from 'styled-components'


const Button = styled.button`
    background-color: #EB9B00;
    padding: 16px 32px;
    border: solid 2px #EB9B00 ;
    cursor: pointer;
    font-size: 20px;
    color: white;
    &:hover {
        background-color: #B87900;
        border: solid 2px #B87900;
    }
`


export function AbButton() {
  return (
     <Button>Login</Button>
    )
}
