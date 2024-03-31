import React, { useEffect, useState } from 'react'
import { getAllRooms } from "../utils/ApiFunctions"
import { Col, Row } from "react-bootstrap"
import RoomFilter from '../common/RoomFilter'
import RoomPaginator from '../common/RoomPaginator'

const ExistingRooms = () => {

  const[rooms, setRooms] = useState([])
  const[currentPage, setCurrentPage] = useState(1)
  const[roomsPerPage] = useState(8)
  const[isLoading, setIsLoading] = useState(false)
  const[filteredRooms, setFilteredRooms] = useState([])
  const[selectedRoomType, setSelectedRoomType] = useState("")
  const[successMessage, setSucessMessage] = useState("")
  const[errorMessage, setErrorMessage] = useState("")


  useEffect(()=>{
    fetchRooms()
  },[])
  
  const fetchRooms = async() =>{
    setIsLoading(true)
    try{
        const result = await getAllRooms()
        setRooms(result)
        setIsLoading(false)
    }catch(error){
        setErrorMessage(error.message)
    }
  }
 
  useEffect(()=>{
    if(selectedRoomType === ""){
        setFilteredRooms(rooms)
    }else{
        const filteredRooms = rooms.filter((room)=> room.roomType === selectedRoomType)
        setFilteredRooms(filteredRooms)
    }
    setCurrentPage(1)
  }, [rooms, selectedRoomType])

  const handlePaginationClick = (pageNumber) =>{
    setCurrentPage(pageNumber)
  }

  const calculateTotalPages = (filteredRooms, roomsPerPage, rooms) =>{
    const totalRooms = filteredRooms.length > 0 ? filteredRooms.length : rooms.length
    return Math.ceil(totalRooms/roomsPerPage)
  }

  const indexOfLastRoom = currentPage * roomsPerPage
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom)

  return (
    <>
    {isLoading ? (
        <p>Loading rooms...</p>
    ): (
        <>
        <section className='mt-5 mb-5 container'>
            <div className='d-flex justify-content-center mb-3 mt-5'>
                <h2>Existing Rooms</h2>
            </div>
            <Col md={6} className="mb-3 mb-md-0">
                <RoomFilter data={rooms} setFilteredData={setFilteredRooms}/>
            </Col>

            <table className='table table-bordered table-hover'>
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>Room Type</th>
                        <th>Room Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRooms.map((room)=>(
                        <tr key={room.id} className='text-center'>
                            <td>{room.id}</td>
                            <td>{room.roomType}</td>
                            <td>{room.roomPrice}</td>
                            <td>
                                <button>View / Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <RoomPaginator currentPage={currentPage} 
            totalPages={calculateTotalPages(filteredRooms, roomsPerPage, rooms)}
            onChange={handlePaginationClick}

            />
        </section>
        </>
    )}


    </>
  )
}

export default ExistingRooms