package com.appointment.appointment.service;

import com.appointment.appointment.doa.RoleRepository;
import com.appointment.appointment.doa.TeacherRepository;
import com.appointment.appointment.model.Role;
import com.appointment.appointment.model.Teacher;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleServices {
    private final RoleRepository roleRepository;

    public RoleServices(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }
    public List<Role> getAllRoles() {
        return roleRepository.findAll();
    }
    public Role addRole(Role role){
        return roleRepository.save(role);
    }
}
