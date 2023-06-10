package com.appointment.appointment.doa;


import com.appointment.appointment.model.Appointment_History;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentHistoryRepository extends JpaRepository<Appointment_History, Long>{
}
