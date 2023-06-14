package com.appointment.appointment.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Table(name="teacher")
@Entity
@Getter
@Setter
@ToString
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

   @OneToMany(mappedBy ="teacher" ,cascade = CascadeType.ALL)
    private List<Appointment> appointments;
   @OneToMany(mappedBy ="teachers",cascade = CascadeType.ALL)
    private List<Student> students;

    @OneToOne(mappedBy ="teacher")
    private Users teacher;
}