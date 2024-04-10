import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:9192"
})



// This function adds a new room to the database
export async function addRoom(photo, roomType, roomPrice){

    const formData = new FormData()
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const response = await api.post("/rooms/add/new-room", formData)
    if(response.status === 201){
        return true
    }else{
        return false
    }

}

// This function gets all room types from database
export async function getRoomTypes(){

    try{
        const response = await api.get("/rooms/room/types")
        return response.data

    }catch(error){
        throw new Error("Error fetching room types")
    }
}


// This functions gets all rooms from the DB
export async function getAllRooms(){
    try{

        const result = await api.get("/rooms/all-rooms")
        return result.data


    }catch(error){
        throw new Error("Error fetching rooms")
    }
}


//This function deletes a room by id
export async function deleteRoom(roomId){

    try{

        const result = await api.delete(`/rooms/delete/room/${roomId}`)
        return result.data

    }catch(error){
        throw new Error(`Error deleting room ${error.message}`)
    }

}

// This function updates a room
export async function updateRoom(roomId, roomData){
    const formData = new FormData()
    formData.append("roomType", roomData.roomType)
    formData.append("roomPrice", roomData.roomPrice)
    formData.append("photo", roomData.photo)
    const response = await api.put(`/rooms/update/${roomId}`, formData)
    return response
}

// This function gets a room by id
export async function getRoomById(roomId){

    try{
        const result = await api.get(`/rooms/room/${roomId}`)
        return result.data

      
    }catch(error){
        throw new Error(`Error fetching room ${error.message}`)
    }

}

// This methods saves a new booking to the DB 
export async function bookRoom(roomId, booking){
   
    try{
        const response = await api.post(`/bookings/room/${roomId}/booking`, booking)
        return response.data
    }catch(error){
        if(error.response && error.response.data){
            throw new Error(error.response.data)
        }else{
            throw new Error(`Error booking room : ${error.message}`)
        }
    }
}

// This method gets all bookings from the db
export async function getAllBookings(){
    try{
        const result = await api.get("bookings/all-bookings")
        return result.data
    }catch(error){
        throw new Error(`Error fetching bookings : ${error.message}`)
    }
}


// This function get booking by the confirmation code
export async function getBookingByConfirmationCode(confirmationCode){

    try{
        const result = await api.get(`/bookings/confirmation/${confirmationCode}`)
        return result.data
    }catch(error){
        if(error.response && error.response.data){
            throw new Error(error.response.data)
        }else{
            throw new Error(`Error finding booking : ${error.message}`)
        }
    }

}


//This function cancels booking
export async function cancelBooking(bookingId){
    try{
        const result = await api.delete(`/bookings/booking/${bookingId}/delete`)
        return result.data
    }catch(error){
        throw new Error(`Error cancelling booking : ${error.message}`)
    }
}