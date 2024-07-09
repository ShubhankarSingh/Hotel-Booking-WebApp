package com.project.bookMyHotel.controller;

import com.project.bookMyHotel.exception.UserAlreadyExistsException;
import com.project.bookMyHotel.model.User;
import com.project.bookMyHotel.service.IUserService;
import com.project.bookMyHotel.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RequiredArgsConstructor
public class AuthController {

    private final IUserService userService;
    public ResponseEntity<?> registerUser(User user){
        try{
            userService.registerUser(user);
            return ResponseEntity.ok("Registration successfully");
        }catch(UserAlreadyExistsException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }
}
