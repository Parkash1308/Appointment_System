package com.appointment.appointment.controller;

import com.appointment.appointment.model.Users;
import com.appointment.appointment.service.UsersServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/appointment/users")
public class UsersController {
    private final UsersServices usersService;
    @Autowired
    public UsersController(UsersServices usersService) {
        this.usersService = usersService;
    }


    @GetMapping
    public List<Users> findAllUsers() {
        return usersService.getUsers();
    }

    @PostMapping
    public ResponseEntity<Users> saveUsers(@RequestBody Users users){
        Users savedUsers = usersService.addUsers(users);
        return ResponseEntity.created(URI.create("/appointment/users"+savedUsers.getUser_id())).body(savedUsers);

    }
}
