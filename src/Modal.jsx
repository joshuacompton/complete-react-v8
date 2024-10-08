import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children }) => {
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    modalRoot.appendChild(elRef.current)

    return () => modalRoot.removeChild(elRef.current)
  }, [])

  // whatever is returned from useEffect will be run when the component is unmounted.
  return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal
