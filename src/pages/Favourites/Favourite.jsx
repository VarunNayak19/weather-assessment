import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems, setClearCartItems, setRemoveItemFromCart } from '../../redux/favouriteSlice';
import './Favourite.css'
const Favourite = () => {
    const dispatch = useDispatch();
    //modal prep
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //modal styling
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "25%",
        minWidth: 300,
        height: 200,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    //dummy dets
    const favarr = [
        { city: 'udupi', state: 'karnataka', icn: '../../assets/icon_mostly_sunny.png', temp: '31C', feel: 'Mostly sunny' },
        { city: 'mangalore', state: 'karnataka', icn: '../../assets/icon_mostly_sunny.png', temp: '30C', feel: 'Mostly sunny' },
        { city: 'mysore', state: 'karnataka', icn: '../../assets/icon_mostly_sunny.png', temp: '38C', feel: 'Mostly sunny' },
        { city: 'tumkur', state: 'karnataka', icn: '../../assets/icon_mostly_sunny.png', temp: '36C', feel: 'Mostly sunny' },
        { city: 'kapu', state: 'karnataka', icn: '../../assets/icon_mostly_sunny.png', temp: '30C', feel: 'Mostly sunny' },
    ]

    //from redux
    let e = useSelector(selectCartItems);
    console.log("selectCartItems", e);


    const onRemoveItem = (i) => {
        let item = e[i];
        console.log("items", item)
        console.log("item removed");
        dispatch(setRemoveItemFromCart(item))
    };

    const clearCart = () => {
        dispatch(setClearCartItems())
    }
    const navigate = useNavigate();
    const sendbacktohome = (i) => {
        let item2 = e[i];
        console.log("2", item2);
        localStorage.setItem("searchfromthunk", JSON.stringify(item2));
        navigate("/");
    }

    return (
        <>
            {
                e.length === 0 ? <div className='no-fav'>
                    <img src={require("../../assets/icon_nothing.png")} alt="no-fav" />
                    <h3>No favourites added</h3>
                </div> :

                    <div className='favourite-container'>
                        <div className="top-dets">
                            <div className='no-cities'>{e.length} cities added as Favourite</div>
                            <div className='remove-all-button' onClick={handleOpen}>Remove all</div>
                        </div>
                        <>
                            {
                                e.map((e, i) => (
                                    <div className="eachdiv" key={i}>
                                        <div className="city-dets" onClick={() => sendbacktohome(i)}>
                                            <span>{e.name}</span>, <span>{e.sys.country}</span>
                                        </div>
                                        <div className="tempdets">
                                            <img src={require(`../../assets/weathericons/${e.weather[0].icon}@2x.png`)} alt="wicon" className='w-icon' />
                                            <span><span className='temp-det-in-fav'>{e.main.temp.toFixed(0)}</span>&#176;C</span><span>{e.weather[0].description}</span>
                                        </div>
                                        <div className="heart">
                                            <img src={require("../../assets/icon_favourite_Active.png")} alt="heart" className='heart-yellow' onClick={() => onRemoveItem(i)} />
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                        <div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <div style={style} className='modal-div'>
                                    <h3>Are you sure you want to remove all the favourites?</h3>
                                    <div className='buttons'>
                                        <button className='modal-button' onClick={handleClose}>NO</button>
                                        <button className='modal-button' onClick={clearCart} >YES</button>
                                    </div>
                                </div>

                            </Modal>
                        </div>
                    </div>
            }
        </>
    )
}

export default Favourite