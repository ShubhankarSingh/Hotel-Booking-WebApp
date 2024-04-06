import React from 'react'
import {Col, Card} from "react-bootstrap"
import { Link } from 'react-router-dom'


const RoomCard = ({room}) => {

  return (
    
    <Col key={room.id} className="mb-4" xs={12}>
        <Card>
            <Card.Body className="d-flex flex-wrap align-items-center">
                <div className='flex-shrink-0 mr-3 mb-3 mb-md-0'>
                    <Card.Img
                    variant='top'
                    src={`data:image/png;base64, ${room.photo}`}
                    alt="Room photo"
                    style={{width:"100%", maxWidth: "200px", height: "auto"}}
                    />
                </div>
                <div className='flex-grow-1 ml-3 px-5'>
                    <Card.Title className="hotel-color">{room.roomType}</Card.Title>
                    <Card.Title className="room-price">{room.roomPrice} / night</Card.Title>
                    <Card.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, temporibus.</Card.Text>
                </div>
                <div className="flex-shrink-0 mt-3">
                    <Link to={`bookings/${room.id}`} className='btn btn-hotel btn-sm'>
                       View / Book
                    </Link>
                </div>
            </Card.Body>
        </Card>
    </Col>
  )
}

export default RoomCard