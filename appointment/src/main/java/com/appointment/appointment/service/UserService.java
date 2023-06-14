package com.appointment.appointment.service;


import com.appointment.appointment.doa.UsersRepository;
import com.appointment.appointment.model.Users;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UsersRepository usersRepository;

    public UserService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<Users> getUsers(){
        return usersRepository.findAll();
    }

    public Users addUser(Users user){
        return usersRepository.save(user);
    }
    public Optional<Users> getUserByCMS_ID(String cmsId) {
        return usersRepository.findByCmsId(cmsId);
    }
}
