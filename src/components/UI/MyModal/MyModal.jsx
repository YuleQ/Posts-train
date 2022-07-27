import React from 'react'
import cl from './MyModal.module.scss'
const MyModal = ({children}) => {
  return (
    <div className={cl.myModal}>
        <div className={cl.myModalContent}>
        {children}
        </div>
    </div>
  )
}

export default MyModal