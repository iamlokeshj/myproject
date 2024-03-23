import React from 'react'
import Menu2 from './Menu2'
import DetailsOfContact from './DetailsOfContact'
import {useParams} from 'react-router-dom'

const Contactinfo = () => {
    var {index} = useParams();
    return (
    <div>
        <Menu2 />
        <DetailsOfContact id={index}/>
    </div>
  )
}

export default Contactinfo
