package com.project.bookMyHotel.service;

import com.project.bookMyHotel.model.Role;
import com.project.bookMyHotel.model.User;

import java.util.List;

public class RoleService implements IRoleService{
    @Override
    public List<Role> getRoles() {
        return null;
    }

    @Override
    public Role createRole(Role theRole) {
        return null;
    }

    @Override
    public void deleteRole(Long id) {

    }

    @Override
    public Role findByName(String name) {
        return null;
    }

    @Override
    public User removeUserFromRole(Long userId, Long roleId) {
        return null;
    }

    @Override
    public User assignRoleToUser(Long userId, Long roleId) {
        return null;
    }

    @Override
    public Role removeAllUsersFromRole(Long userId) {
        return null;
    }
}
