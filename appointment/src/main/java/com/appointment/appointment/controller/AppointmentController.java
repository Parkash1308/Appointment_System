package com.appointment.appointment.controller;

import com.appointment.appointment.model.Appointment;
import com.appointment.appointment.service.AppointmentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("appointment/appointments")
public class AppointmentController {
    private final AppointmentServices appointmentServices;
    @Autowired
    public AppointmentController(AppointmentServices appointmentServices) {
        this.appointmentServices = appointmentServices;
    }
    @GetMapping
    public List<Appointment> findALLAppointments() {
        return appointmentServices.getAllApplications();
    }
    @PostMapping
    public ResponseEntity<Appointment> saveAppointments(@RequestBody Appointment application){
        Appointment savedAppointment = appointmentServices.saveAppointment(application);
        return ResponseEntity.created(URI.create("appointment/appointments"+savedAppointment.getId())).body(savedAppointment);
    }

}
