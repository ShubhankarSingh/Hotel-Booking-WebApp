import React, { useEffect, useState } from 'react'
import { cancelBooking, getAllBookings } from '../utils/ApiFunctions'
import Header from "../common/Header"
import BookingsTable from './BookingsTable'

const Bookings = () => {
  const[bookingInfo, setBookingInfo] = useState([])
  const[isLoading, setIsLoading] = useState(true)
  const[error, setError] = useState("")

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adds leading zero 
    const day = String(date.getDate()).padStart(2, '0'); 
    return `${year}-${month}-${day}`;
  }
  
  useEffect(()=>{
    setTimeout(()=>{
        getAllBookings()
            .then((data)=>{
                
                // Format checkInDate for each booking
                const formattedBookings = data.map((booking) => {
                    const checkInFormattedDate = new Date(booking.checkInDate[0], booking.checkInDate[1] - 1, booking.checkInDate[2]);
                    const checkOutFormattedDate = new Date(booking.checkOutDate[0], booking.checkOutDate[1] - 1, booking.checkOutDate[2]);
                    const checkIndate = formatDate(checkInFormattedDate);
                    const checkOutdate = formatDate(checkOutFormattedDate);
                    return { ...booking, checkInDate: checkIndate, checkOutDate: checkOutdate };
                });

                setBookingInfo(formattedBookings)
                setIsLoading(false)
            }).catch((error)=>{
                setError(error.message)
                setIsLoading(false)
            })
    },1000)
  }, [])


  const handleBookingCancellation = async(bookingId) =>{
    try{
        await cancelBooking(bookingId)
        const data = await getAllBookings()
        setBookingInfo(data)
    }catch(error){
        setError(error.message)
    }
  }


  return (
    <section style={{backgroundColor: "whitesmoke"}}>
        <Header title={"Existing Bookings"}/>
        {error && (<div className='text-danger'>{error}</div>)}
        {isLoading ? (<div>Loading existing bookings</div>) : (
            <BookingsTable bookingInfo={bookingInfo}
                handleBookingCancellation={handleBookingCancellation}
            />
        )}

    </section>
  )
}

export default Bookings