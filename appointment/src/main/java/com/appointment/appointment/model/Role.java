package com.appointment.appointment.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Table(name = "role")
@Entity
@Getter
@Setter
@ToString
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long role_id;

    private String role_name;

    private String role_description;

    @OneToOne(mappedBy = "role")
    private Users users;

}
