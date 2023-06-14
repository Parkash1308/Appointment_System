package com.appointment.appointment.controller;

import com.appointment.appointment.model.Users;
import com.appointment.appointment.service.UserService;
import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(
        origins = {"http://localhost:3000"}
)
@RequestMapping({"/appointment/users"})
public class UserController {
    private final UserService usersService;


    public UserController(UserService usersService) {
        this.usersService = usersService;
    }

    @Autowired


    @GetMapping
    public List<Users> findAllUsers() {
        return this.usersService.getAllUser();
    }

    @PostMapping
    public ResponseEntity<Users> saveUsers(@RequestBody Users users) {
        Users savedUsers = this.usersService.addUser(users);
        return ResponseEntity.created(URI.create("/appointment/users" + savedUsers.getUser_id())).body(savedUsers);
    }
}

