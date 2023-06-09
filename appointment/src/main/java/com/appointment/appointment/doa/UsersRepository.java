package com.appointment.appointment.doa;


import com.appointment.appointment.model.Users;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users, Long>{
    Optional<Users> findByCmsId(String cmsId);
}
