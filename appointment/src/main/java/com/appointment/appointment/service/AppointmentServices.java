package com.appointment.appointment.service;

import com.appointment.appointment.doa.AppointmentRepository;
import com.appointment.appointment.model.Appointment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentServices {
    private final AppointmentRepository appointmentRepository;
    @Autowired
    public AppointmentServices(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    public List<Appointment> getAllApplications(){
        return appointmentRepository.findAll();
    }
    public Appointment  saveAppointment(Appointment appointment){
        return appointmentRepository.save(appointment);
    }
}
