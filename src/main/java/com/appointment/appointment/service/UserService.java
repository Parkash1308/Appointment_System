package com.appointment.appointment.service;

import com.appointment.appointment.doa.UserRepository;
import com.appointment.appointment.model.Users;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<Users> getAllUser() {
        return userRepository.findAll();
    }
    public Users addUser(Users user) {
        return userRepository.save(user);
    }
}
