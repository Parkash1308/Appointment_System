package com.appointment.appointment.controller;

import com.appointment.appointment.model.Role;
import com.appointment.appointment.model.Teacher;
import com.appointment.appointment.service.RoleServices;
import com.appointment.appointment.service.TeacherServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/appointment/role")
public class RoleController {
    private final RoleServices roleService;
    @Autowired
    public RoleController(RoleServices roleService) {
        this.roleService = roleService;
    }


    @GetMapping
    public List<Role> findAllroles() {
        return roleService.getAllRoles();
    }

    @PostMapping
    public ResponseEntity<Role> saveRole(@RequestBody Role role){
        Role savedRole = roleService.addRole(role);
        return ResponseEntity.created(URI.create("/appointment/role"+savedRole.getRole_id())).body(savedRole);

    }
}
