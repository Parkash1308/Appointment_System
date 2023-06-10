package com.appointment.appointment.controller;

import com.appointment.appointment.model.Appointment_History;
import com.appointment.appointment.service.AppointmentHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/appointment/appointmentHistory")
public class ApointmentHistoryController {
    private final AppointmentHistoryService appointmentHistoryService;
        @Autowired
    public ApointmentHistoryController(AppointmentHistoryService appointmentHistoryService) {
            this.appointmentHistoryService = appointmentHistoryService;
    }
    @GetMapping
    public List<Appointment_History> findAllAppointmentsHistory(){
            return appointmentHistoryService.getAppointmentsHistory();
    }

    @PostMapping
    public ResponseEntity<Appointment_History> saveAppointmentsHistory(@RequestBody Appointment_History appointmentsHistory){
        Appointment_History savedAppointment_History = appointmentHistoryService.addAppointmentHistory(appointmentsHistory);
        return ResponseEntity.created(URI.create("appointment/appointments"+savedAppointment_History.getId())).body(savedAppointment_History);

    }


}
