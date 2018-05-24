package com.ua.nure.TestHelper.controller;

import com.ua.nure.TestHelper.domain.Link;
import com.ua.nure.TestHelper.domain.User;
import com.ua.nure.TestHelper.repository.UserRepository;
import com.ua.nure.TestHelper.service.LinkService;
import com.ua.nure.TestHelper.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    LinkService linkService;

    @Autowired
    UserService userService;

    @CrossOrigin
    @RequestMapping(value ="/getStudents", method = RequestMethod.POST,  consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<User> getStudents(@RequestBody Link link) {
        try{
           return userService.getAllByLink(link.getLink());
        }catch (Exception e){
            System.out.println(e);
        }
        return null;
    }

}
