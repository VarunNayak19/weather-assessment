import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetcWeatherDeatils } from '../../redux/dataSlice'
import Switch from "react-switch";
import './Home.css'
import Loader from '../../components/Loader/Loader'
import { setAddItemToCart, setRemoveItemFromCart } from '../../redux/favouriteSlice';
import { setAddItemToList } from '../../redux/recSearchSlice';
const Home = () => {
    const dispatch = useDispatch();
    const [loadervis, setloadervis] = useState(true)

    setTimeout(() => {
        setloadervis(false)
    }, 500);

    const data = useSelector((state) => state);
    // console.log(data)
    // const weatherDetails = data && data.weatherReducer.weather;
    const weatherDetails = JSON.parse(localStorage.getItem("searchfromthunk"))
    // console.log("weatherDetails", weatherDetails)

    //switch
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };

    //temp in cel and far

    let cel = weatherDetails?.main.temp;
    let far = (cel * 9 * 0.2) + 32;


    //redux work

    const onAddToCart = () => {
        const item = weatherDetails && weatherDetails;
        // console.log("w-w", item)
        dispatch(setAddItemToCart(item))
    }


    let tf = data && data.search && data.search.value;
    if (tf === true) {
        const item = weatherDetails && weatherDetails;
        // console.log("w-w", item)
        dispatch(setAddItemToList(item))
    }

    //yellow heart toggling 

    let favid = JSON.parse(localStorage.getItem("favid") || '[]');
    // console.log("favidinhome", favid)

    const [yellow, setyellow] = useState(false)


    useEffect(() => {
        // favid.map((e, i) => {
        //     console.log("e", e)
        //     console.log("wid", weatherDetails.id);
        //     if (e === weatherDetails.id) {
        //         return setyellow(true);
        //         console.log(yellow);
        //     }
        //     else {
        //         return setyellow(false);
        //         console.log(yellow);
        //     }
        // })
        if (favid.includes(weatherDetails.id)) {
            return setyellow(true);
        }
        else {
            return setyellow(false);
        }

    }, [weatherDetails.id, favid])
    // console.log(yellow);

    //remocvefav

    const onRemoveItem = (i) => {
        let item = weatherDetails;
        // console.log("items", item)
        // console.log("item removed");
        dispatch(setRemoveItemFromCart(item))
        setyellow(false)
    };



    return (
        <>
            {
                loadervis ? <Loader /> :
                    <>
                        {
                            data.loading ? <Loader /> :

                                <>
                                    <div className="home-container">
                                        <div className='place-details-div'>
                                            <div className='placeDiv'><span>{weatherDetails && weatherDetails.name}</span>, <span>{weatherDetails && weatherDetails.sys.country}</span></div>
                                            {
                                                yellow ? <div className='fav-div' onClick={onRemoveItem}>
                                                    <img src={require("../../assets/icon_favourite_Active.png")} alt="fav" />
                                                    <span className='yellowify'>Added to Favourite</span>
                                                </div>

                                                    :
                                                    <div className='fav-div' onClick={onAddToCart}>
                                                        <img src={require("../../assets/icon_favourite.png")} alt="fav" />
                                                        <span>Add to Favourite</span>
                                                    </div>
                                            }
                                        </div>

                                        <div className='display-div'>
                                            <div className="icn">
                                                <img src={require(`../../assets/weathericons/${weatherDetails.weather[0].icon}@2x.png`)} alt='temp-icn' className='temp-icn' />
                                            </div>
                                            <div className="temp">
                                                <div className='temp-display'><p className='temp-value-in-home'>{checked ? far.toFixed(0) : cel.toFixed(0)}</p></div> <div className='type'>
                                                    {/* <div className='celcius'>
                                                        C
                                                    </div>
                                                    <div className="farhenite">
                                                        F
                                                    </div> */}

                                                    <div className="switchTempature" style={{ border: "1px solid #ffffff" }}>
                                                        <Switch
                                                            borderRadius={4}
                                                            onChange={handleChange}
                                                            checked={checked}
                                                            className="react-switch"
                                                            offColor="transparent"
                                                            onColor="transparent"
                                                            uncheckedHandleIcon={
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        justifyContent: "center",
                                                                        alignItems: "center",
                                                                        height: "100%",
                                                                        fontSize: 18,
                                                                        color: "red",
                                                                    }}
                                                                >
                                                                    {"\u00B0"}C
                                                                </div>
                                                            }
                                                            uncheckedIcon={
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        justifyContent: "center",
                                                                        alignItems: "center",
                                                                        height: "100%",
                                                                        fontSize: 18,
                                                                        paddingRight: 2,
                                                                        color: "white",
                                                                        zIndex: "2",
                                                                    }}
                                                                >
                                                                    {"\u00B0"}F
                                                                </div>
                                                            }
                                                            checkedIcon={
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        justifyContent: "center",
                                                                        alignItems: "center",
                                                                        height: "100%",
                                                                        fontSize: 18,
                                                                        paddingRight: 2,
                                                                        color: "white",
                                                                    }}
                                                                >
                                                                    {"\u00B0"}C
                                                                </div>
                                                            }
                                                            checkedHandleIcon={
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        justifyContent: "center",
                                                                        alignItems: "center",
                                                                        height: "100%",
                                                                        color: "red",
                                                                        fontSize: 18,
                                                                    }}
                                                                >
                                                                    {"\u00B0"}F
                                                                </div>
                                                            }
                                                        />
                                                    </div>


                                                </div>
                                            </div>
                                            <div className="desc"><h1>{weatherDetails && weatherDetails.weather[0].description}</h1></div>
                                        </div>
                                        <div className='more-details-div'>
                                            <div className="min-max bottom-det">
                                                <div className='icn'>
                                                    <img src={require("../../assets/icon_temperature_info.png")} alt="icn" />
                                                </div>
                                                <div className="icn-det">
                                                    <span className='name'>Min-Max</span>
                                                    <span className='value'>{weatherDetails && weatherDetails.main && weatherDetails.main.temp_min.toFixed(0)}&#176; - {weatherDetails && weatherDetails.main && weatherDetails?.main.temp_max.toFixed(0)}&#176;</span>
                                                </div>
                                            </div>
                                            <div className="precipitation bottom-det">
                                                <div className='icn'>
                                                    <img src={require("../../assets/icon_precipitation_info.png")} alt="icn" />
                                                </div>
                                                <div className="icn-det">
                                                    <span className='name'>Precipitation</span>
                                                    <span className='value'>{weatherDetails && weatherDetails.clouds.all}%</span>
                                                </div>
                                            </div>
                                            <div className="humidity bottom-det">
                                                <div className='icn'>
                                                    <img src={require("../../assets/icon_humidity_info.png")} alt="icn" />
                                                </div>
                                                <div className="icn-det">
                                                    <span className='name'>Humidity</span>
                                                    <span className='value'>{weatherDetails && weatherDetails.main.humidity}%</span>
                                                </div>
                                            </div>
                                            <div className="wind bottom-det">
                                                <div className='icn'>
                                                    <img src={require("../../assets/icon_wind_info.png")} alt="icn" />
                                                </div>
                                                <div className="icn-det">
                                                    <span className='name'>Wind</span>
                                                    <span className='value'>{weatherDetails && weatherDetails.wind.speed.toFixed(0)}mph</span>
                                                </div>
                                            </div>
                                            <div className="visibility bottom-det">
                                                <div className='icn'>
                                                    <img src={require("../../assets/icon_visibility_info.png")} alt="icn" />
                                                </div>
                                                <div className="icn-det">
                                                    <span className='name'>Visbility</span>
                                                    <span className='value'>{weatherDetails && (weatherDetails.visibility / 1000).toFixed(0)}km</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                        }
                    </>
            }
        </>
    )
}

export default Home