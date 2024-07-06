package com.project.bookMyHotel.service;

import com.project.bookMyHotel.model.User;

import java.util.List;

public interface IUserService {

    User registerUser(User user);

    List<User> getUsers();

    void deleteUser(String email);

    User getUser(String email);
}
