package com.appointment.appointment.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Table(name="users")

@Entity
@Getter
@Setter
@ToString
public class Users {
    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )
    private Long user_id;
    private String first_name;
    private String last_name;
    private String cms_ID;
    private String email;
    private String password;
    private String phone_number;
    private String gender;
    private String role;
    private String department;
    @OneToOne(
            cascade = {CascadeType.ALL}
    )
    @JoinColumn(
            name = "student_id"
    )
    private Student student;
    @OneToOne(
            cascade = {CascadeType.ALL}
    )
    @JoinColumn(
            name = "teacher_id"
    )
    private Teacher teacher;
}
