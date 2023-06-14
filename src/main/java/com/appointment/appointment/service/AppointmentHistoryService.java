package com.appointment.appointment.service;

import com.appointment.appointment.doa.AppointmentHistoryRepository;
import com.appointment.appointment.model.Appointment_History;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentHistoryService {
    private  final AppointmentHistoryRepository appointmentHistoryRepository;
        @Autowired
    public AppointmentHistoryService(AppointmentHistoryRepository appointmentHistoryRepository) {
        this.appointmentHistoryRepository = appointmentHistoryRepository;
    }

    public List<Appointment_History> getAppointmentsHistory() {
            return appointmentHistoryRepository.findAll();
    }
    public Appointment_History addAppointmentHistory   (Appointment_History appointmentHistory) {
            return appointmentHistoryRepository.save(appointmentHistory);
    }

}
