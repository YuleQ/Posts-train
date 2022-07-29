import React from 'react'
import { getPageArray } from '../../../utils/page'
import cl from './Pogination.module.scss'

const Pogination = ({totalPage , page , changePost}) => {
  let pageArray = getPageArray(totalPage)
  return (
    <div className='page__wrapper'>
             {pageArray.map(p => 
                <span
                    onClick={() => changePost(p)}  
                    key = {p} 
                    className={page === p ? 'page__current page' : 'page'}
                >
                    {p}
                </span>
             )}
             </div>
  )
}

export default Pogination