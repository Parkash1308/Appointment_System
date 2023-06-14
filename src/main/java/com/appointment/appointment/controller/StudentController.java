package com.appointment.appointment.controller;

import com.appointment.appointment.model.Student;
import com.appointment.appointment.service.StudentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/appointment/student")
public class StudentController {
    private  final StudentServices studentServices;
    @Autowired

    public StudentController(StudentServices studentServices) {
        this.studentServices = studentServices;
    }

    @GetMapping
    public List<Student> findAllStudent(){
        return studentServices.getAllStudent();
    }

    @PostMapping
    public ResponseEntity<Student> saveStudent(@RequestBody Student student){
        Student savedStudent = studentServices.addStudent(student);
        return ResponseEntity.created(URI.create("appointment/student"+savedStudent.getId())).body(savedStudent);
    }
}
