package com.appointment.appointment.controller;

import com.appointment.appointment.model.Teacher;
import com.appointment.appointment.service.TeacherServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/appointment/teacher")
public class TeacherController {
    private final TeacherServices teacherService;
    @Autowired
    public TeacherController(TeacherServices teacherService) {
        this.teacherService = teacherService;
    }

    @Autowired

    @GetMapping
    public List<Teacher> findAllTeachers() {
        return teacherService.getAllTeachers();
    }

    @PostMapping
    public ResponseEntity<Teacher> saveTeacher(@RequestBody Teacher teacher){
        Teacher savedTeacher = teacherService.addTeacher(teacher);
        return ResponseEntity.created(URI.create("/appointment/teacher"+savedTeacher.getId())).body(savedTeacher);

    }
}
