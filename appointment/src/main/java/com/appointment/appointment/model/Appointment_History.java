package com.appointment.appointment.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.*;
import java.util.List;

@Table(name="appointmentHistory")
@Entity
@Getter
@Setter
@ToString
public class Appointment_History {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private LocalDate date;
    private LocalTime startTime;
    private LocalTime endTime;
    @OneToMany(mappedBy = "appointmentHistory", cascade = CascadeType.ALL)
    private List<Appointment> appointmentList;



}
