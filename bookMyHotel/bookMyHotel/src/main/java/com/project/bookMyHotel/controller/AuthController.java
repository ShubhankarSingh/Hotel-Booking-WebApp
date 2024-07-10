package com.project.bookMyHotel.controller;

import com.project.bookMyHotel.exception.UserAlreadyExistsException;
import com.project.bookMyHotel.model.User;
import com.project.bookMyHotel.service.IUserService;
import com.project.bookMyHotel.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

@RequiredArgsConstructor
public class AuthController {

    private final IUserService userService;

    @PostMapping("/register-user")
    public ResponseEntity<?> registerUser(User user){
        try{
            userService.registerUser(user);
            return ResponseEntity.ok("Registration successfully");
        }catch(UserAlreadyExistsException e){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        }
    }
}
