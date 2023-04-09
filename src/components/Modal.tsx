import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { Transition } from 'react-transition-group'
import { Backdrop } from '@/components/Backdrop'
import styled from 'styled-components'
import { XMarkIcon } from '@heroicons/react/24/solid'

const ModalWrapper = styled.div`
  z-index: 100;
  position: absolute;
  top: 16vh;
  left: 30%;
  width: 40%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
`

interface ModalProps {
  children?: ReactNode
  header?: string
  onClick?: () => void
  onClose: () => void
  show?: boolean
}

type ModalOverlayProps = Omit<ModalProps, 'show' | 'onClick'>

const ModalOverlay = ({ header, children, onClose }: ModalOverlayProps) => {
  const content = (
    <ModalWrapper>
      <div className="flex justify-end m-4">
        <XMarkIcon onClick={onClose} className="h-6 w-6 cursor-pointer" />
      </div>
      <header className="w-full p-4">
        <h2 className="p-2 text-center">{header}</h2>
      </header>
      <div className="p-4">{children}</div>
    </ModalWrapper>
  )

  return ReactDOM.createPortal(content, document.body)
}

export const Modal = (props: ModalProps) => {
  const nodeRef = React.useRef(null)

  return (
    <>
      {props.show && <Backdrop onClick={props.onClick} />}
      <Transition
        nodeRef={nodeRef}
        in={props.show}
        timeout={200}
        classNames="the-modal"
        mountOnEnter
        unmountOnExit
      >
        {() => <ModalOverlay {...props} />}
      </Transition>
    </>
  )
}
