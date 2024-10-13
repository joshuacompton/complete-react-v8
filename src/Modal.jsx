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
  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-20">
      {children}
    </div>,
    elRef.current
  )
}

export default Modal
