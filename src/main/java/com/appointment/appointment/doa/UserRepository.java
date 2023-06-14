package com.appointment.appointment.doa;


import com.appointment.appointment.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long>{
}
