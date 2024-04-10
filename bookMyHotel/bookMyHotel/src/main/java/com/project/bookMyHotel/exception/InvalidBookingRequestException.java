package com.project.bookMyHotel.exception;

public class InvalidBookingRequestException extends RuntimeException{

    public InvalidBookingRequestException(String message) {
        super(message);
    }
}
