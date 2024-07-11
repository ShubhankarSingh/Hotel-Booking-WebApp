package com.project.bookMyHotel.service;

import com.project.bookMyHotel.model.Role;
import com.project.bookMyHotel.model.User;

import java.util.List;

public interface IRoleService {

    List<Role> getRoles();

    Role createRole(Role theRole);

    void deleteRole(Long roleId);

    Role findByName(String name);

    User removeUserFromRole(Long userId, Long roleId);

    User assignRoleToUser(Long userId, Long roleId);

    Role removeAllUsersFromRole(Long roleId);
}
