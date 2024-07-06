package com.project.bookMyHotel.repository;

import com.project.bookMyHotel.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(String roleUser);
}
