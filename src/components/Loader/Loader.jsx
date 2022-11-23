import React from 'react'
import { BarLoader } from 'react-spinners'
import './Loader.css'
const Loader = () => {
    return (
        <>
            <div className='loader-container'>
                <img src={require('../../assets/logo_web.png')} alt="loader-icn" />
                <BarLoader color="#ad6d18" />
            </div>
        </>
    )
}

export default Loader