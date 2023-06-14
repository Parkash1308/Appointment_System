package com.appointment.appointment.controller;

import com.appointment.appointment.model.Student;
import com.appointment.appointment.model.Teacher;
import com.appointment.appointment.model.Users;
import com.appointment.appointment.service.StudentServices;
import com.appointment.appointment.service.TeacherServices;
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

@RestController
@CrossOrigin(
        origins = {"http://localhost:3000"}
)
@RequestMapping({"/appointment/users"})
public class UserController {
    private final UserService usersService;
    private final StudentServices studentService;
    private final TeacherServices teacherService;
    @Autowired
    public UserController(UserService usersService, StudentServices studentService, TeacherServices teacherService) {
        this.usersService = usersService;
        this.studentService = studentService;
        this.teacherService = teacherService;
    }




    @GetMapping
    public List<Users> findAllUsers() {
        return this.usersService.getUsers();
    }

    @PostMapping
    public ResponseEntity<Users> saveUsers(@RequestBody Users users) {
        Users savedUser = this.usersService.addUser(users);
        System.out.println("savedUserId"+users.getUser_id());

        if (users.getRole().equals("Student")) {
            System.out.println("teacher_cms:  "+users.getTeacher_cms());
//            Long userId = usersService.getUserByCMS_ID(users.getTeacher_cms())
//                    .orElseThrow(() -> new IllegalArgumentException("Invalid CMS ID"))
//                    .getUser_id();
            Long userId = usersService.getUserByCMS_ID(users.getTeacher_cms())
                    .map(Users::getUser_id)
                    .orElseThrow(() -> new IllegalArgumentException("Invalid CMS ID"));

            System.out.println("UserID"+userId);

            Student student = new Student();
            student.setStudent_user(savedUser); // Set the associated user in the Student entity

            student.setTeachers(teacherService.getTeacherById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("Invalid Teacher ID")));
            System.out.println("teacherID"+student.getTeachers().getId());
            studentService.addStudent(student);
            System.out.println("student inserted");
        } else if (users.getRole().equals("Teacher")) {
            Teacher teacher = new Teacher();
            teacher.setTeacher_user(savedUser); // Set the associated user in the Teacher entity
            teacherService.addTeacher(teacher);
        }

        return ResponseEntity.created(URI.create("/appointment/users" + savedUser.getUser_id())).body(savedUser);
    }
}
