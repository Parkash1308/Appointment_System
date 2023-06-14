package com.appointment.appointment.service;

import com.appointment.appointment.doa.TeacherRepository;
import com.appointment.appointment.model.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherServices {
    private final TeacherRepository teacherRepository;

    public TeacherServices(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    public List<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }
    public Teacher addTeacher(Teacher teacher){
        return teacherRepository.save(teacher);
    }
    public Optional<Teacher> getTeacherById(Long id ){
        return teacherRepository.findById(id);
    }

}
