import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
`

interface BackdropProps {
  onClick?: () => void
}

export const Backdrop = ({ onClick }: BackdropProps) => {
  return ReactDOM.createPortal(
    <BackdropWrapper onClick={onClick} />,
    document.body
  )
}
