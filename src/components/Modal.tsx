import React, { useEffect, useRef, useState } from 'react'

interface Props {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const Dialog: React.FC<Props> = ({ isOpen, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    const handleClose = () => {
        setIsVisible(false)
        onClose()
    }
    useEffect(() => {
        if (isOpen) {
          setTimeout(() => setIsVisible(true), 100)
        }
      }, [isOpen])
  
    useEffect(() => {
      if (isOpen) {
        document.addEventListener('mousedown', handleOutsideClick)
      } else {
        document.removeEventListener('mousedown', handleOutsideClick)
      }
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick)
      }
    }, [isOpen])
  
    if (!isOpen) return null

  return (
    <div
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    onClick={onClose}
  >
    <div
      className={`bg-gray-800 text-white rounded-lg p-8 max-w-lg w-full shadow-lg relative border-solid border-2 border-stone-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
      onClick={(e) => e.stopPropagation()}
      ref={modalRef}
    >
      <button
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
        onClick={handleClose}
      >
        &times;
      </button>
       {children}
      </div>
    </div>
  )
}
export default Dialog
