package com.appointment.appointment.doa;


import com.appointment.appointment.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TeacherRepository extends JpaRepository<Teacher, Long>{
    Optional<Teacher> findByUsersUserId (Long userId);


}
