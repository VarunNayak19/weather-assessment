import React from 'react'
import { Modal } from '@mui/material'

const Recent = () => {

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
    width: 400,
    height: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
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
  return (
    <>
      <div className='favourite-container'>
        <div className="top-dets">
          <div className='no-cities'>You recently search for</div>
          <div className='remove-all-button' onClick={handleOpen}>Clear all</div>
        </div>
        <>
          {
            favarr.map((e, i) => (
              <div className="eachdiv">
                <div className="city-dets">
                  <span>{e.city}</span>, <span>{e.state}</span>
                </div>
                <div className="tempdets">
                  <img src={require('../../assets/icon_mostly_sunny.png')} alt="wicon" className='w-icon' />
                  <span>{e.temp}</span><span>{e.feel}</span>
                </div>
                <div className="heart">
                  <img src={require("../../assets/icon_favourite_Active.png")} alt="heart" className='heart-yellow' />
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
              <h3>Are you sure you want to clear all recent searches?</h3>
              <div className='buttons'>
                <button className='modal-button' onClick={handleClose}>NO</button>
                <button className='modal-button' >YES</button>
              </div>
            </div>

          </Modal>
        </div>
      </div>
    </>
  )
}

export default Recent