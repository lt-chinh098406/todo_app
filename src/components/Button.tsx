import React from 'react'
import styled from 'styled-components'

const ButtonWrapper = styled.button`
  background: white;
  border: none;
  padding: 10px 40px;
  border-radius: 4px;
  box-shadow: 0 1px 5px white;
  font-family: inherit;
  font-weight: bold;
  color: #4d1894;
  border: 1px solid #4d1894;
  transition: all 0.2s ease-out;

  &:hover {
    color: white;
    border: 1px solid white;
    background: #4d1894;
    box-shadow: 0 2px 5px 2px white;
  }

  &:active {
    transform-origin: bottom center;
    transform: scaleY(0.98) translateY(2px);
    box-shadow: 0 2px 5px white;
  }
`

interface TheButtonProps {
  onClick?: () => void
  children: React.ReactNode
  type?: 'button' | 'submit'
}

export const Button = ({ children, onClick, type }: TheButtonProps) => {
  return (
    <ButtonWrapper type={type || 'button'} onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
}
