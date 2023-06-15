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
    @Column(name = "userId")
    private Long userId;
    private String first_name;
    private String last_name;
    private String cmsId;
    private String email;
    private String password;
    private String phone_number;
    private String gender;
    private String role;
    private String department;
    @Transient
    private String teacher_cms;

    @OneToOne(mappedBy = "users",fetch = FetchType.LAZY)
    private Student student;


    @OneToOne(mappedBy ="users")
    private Teacher teacher;
}