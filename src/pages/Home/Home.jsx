import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetcWeatherDeatils } from '../../redux/dataSlice'
import './Home.css'
const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetcWeatherDeatils())
    }, [dispatch])

    return (
        <>
            <div className="home-container">
                <div className='place-details-div'>
                    <div className='placeDiv'><span>Udupi</span>,<span>Karnataka</span></div>
                    <div className='fav-div'>
                        <img src={require("../../assets/icon_favourite.png")} alt="fav" />
                        <span>Add to Favourite</span>
                    </div>
                </div>

                <div className='display-div'>
                    <div className="icn">
                        <img src={require("../../assets/icon_mostly_sunny.png")} alt='temp-icn' className='temp-icn' />
                    </div>
                    <div className="temp">
                        <span>87</span> <div className='type'>
                            <div className='celcius'>
                                C
                            </div>
                            <div className="farhenite">
                                F
                            </div>
                        </div>
                    </div>
                    <div className="desc"><h1>Mostly Sunny</h1></div>
                </div>
                <div className='more-details-div'>
                    <div className="min-max bottom-det">
                        <div className='icn'>
                            <img src={require("../../assets/icon_temperature_info.png")} alt="icn" />
                        </div>
                        <div className="icn-det">
                            <span className='name'>Min-Max</span>
                            <span className='value'>75-90</span>
                        </div>
                    </div>
                    <div className="precipitation bottom-det">
                        <div className='icn'>
                            <img src={require("../../assets/icon_precipitation_info.png")} alt="icn" />
                        </div>
                        <div className="icn-det">
                            <span className='name'>Precipitation</span>
                            <span className='value'>0%</span>
                        </div>
                    </div>
                    <div className="humidity bottom-det">
                        <div className='icn'>
                            <img src={require("../../assets/icon_humidity_info.png")} alt="icn" />
                        </div>
                        <div className="icn-det">
                            <span className='name'>Humidity</span>
                            <span className='value'>47%</span>
                        </div>
                    </div>
                    <div className="wind bottom-det">
                        <div className='icn'>
                            <img src={require("../../assets/icon_wind_info.png")} alt="icn" />
                        </div>
                        <div className="icn-det">
                            <span className='name'>Wind</span>
                            <span className='value'>4mph</span>
                        </div>
                    </div>
                    <div className="visibility bottom-det">
                        <div className='icn'>
                            <img src={require("../../assets/icon_visibility_info.png")} alt="icn" />
                        </div>
                        <div className="icn-det">
                            <span className='name'>Vsisbility</span>
                            <span className='value'>12mph</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home