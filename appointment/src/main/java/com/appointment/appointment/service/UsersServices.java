package com.appointment.appointment.service;


import com.appointment.appointment.doa.UsersRepository;
import com.appointment.appointment.model.Users;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersServices {

    private final UsersRepository usersRepository;

    public UsersServices(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<Users> getUsers(){
        return usersRepository.findAll();
    }

    public Users addUsers(Users users){
        return usersRepository.save(users);
    }
        }
