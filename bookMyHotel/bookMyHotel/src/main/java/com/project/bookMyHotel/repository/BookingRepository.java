package com.project.bookMyHotel.repository;

import com.project.bookMyHotel.model.BookedRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<BookedRoom, Long> {
    List<BookedRoom> findByRoomId(Long roomId);
    Optional<BookedRoom>findByBookingConfirmationCode(String confirmationCode);
}
