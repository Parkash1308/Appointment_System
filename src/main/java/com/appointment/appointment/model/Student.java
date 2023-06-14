package com.appointment.appointment.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Table(name="student")
@Entity
@Getter
@Setter
@ToString

public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @OneToMany(mappedBy ="student", cascade=CascadeType.ALL)
    private List<Appointment> appointmentList;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "teacher_id",nullable = false)
    private Teacher teachers;

    @OneToOne(mappedBy = "student",fetch = FetchType.LAZY)
    private Users student;



}
