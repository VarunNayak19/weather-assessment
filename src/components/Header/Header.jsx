import React, { useState, useEffect } from 'react'
import './Header.css'
import { useDispatch } from 'react-redux'
import { fetcWeatherDeatils } from '../../redux/dataSlice'
const Header = () => {


    const dispatch = useDispatch();
    const [inputValue, setinputValue] = useState('')
    // useEffect(() => {
    //     dispatch(fetcWeatherDeatils({ search: inputValue }))
    // }, [dispatch])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetcWeatherDeatils({ search: inputValue }))

    }


    const [showDrawer, setshowDrawer] = useState(false);

    const showDrawerFn = () => {
        setshowDrawer(true)
    }
    const hideDrawerFn = () => {
        setshowDrawer(false)
    }
    return (
        <>
            <div className='header-container'>
                <img src={require('../../assets/logo_web.png')} className='logo-Img' alt="logo" />
                <form className='search-bar-div' onSubmit={submitHandler}>
                    <input type="text" placeholder='Search' className='search-input' onChange={(e) => setinputValue(e.target.value)} />
                    <img className='search-glass-icn' src={require("../../assets/PngItem_307511.png")} alt="glass" />

                </form>
            </div>
            <div className="header-container-mobile">
                <img src={require("../../assets/icon_menu_white.png")} alt="burgir" className='burgir-icn' onClick={showDrawerFn} />
                <img src={require("../../assets/logo.png")} alt="logo-mobile" className='logo-mobile-icn' />
                <img src={require("../../assets/icon_search_white.png")} alt="magglass" className='search-icn' />
                {
                    showDrawer &&

                    <div className='mobile-drawer-main' onClick={hideDrawerFn}>
                        <div className="mobile-drawer-content">
                            <h3>Home</h3>
                            <h3>Favourite</h3>
                            <h3>Recent Search</h3>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Header