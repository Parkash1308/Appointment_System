package com.appointment.appointment.doa;

import com.appointment.appointment.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepository  extends JpaRepository<Appointment, Long>{
}
