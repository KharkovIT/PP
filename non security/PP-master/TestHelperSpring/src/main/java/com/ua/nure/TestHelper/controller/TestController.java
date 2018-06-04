package com.ua.nure.TestHelper.controller;


import com.ua.nure.TestHelper.domain.Test;
import com.ua.nure.TestHelper.domain.Test4Group;
import com.ua.nure.TestHelper.service.Test4GroupService;
import com.ua.nure.TestHelper.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("tests")
@RestController
public class TestController {

    @Autowired
    TestService testService;

    @Autowired
    Test4GroupService test4GroupService;

    @CrossOrigin
    @RequestMapping(value = "/getTeacherTest", method = RequestMethod.GET)
    public List<Test> getTeacherTest(@RequestParam("user") String userId, @RequestParam("group") String group) {
        try {
            System.out.println(testService.getAllbyTeacherNotIn(group ,userId));
            return testService.getAllbyTeacherNotIn(group ,userId);
        } catch (NullPointerException e) {
            System.out.println("no no no");
        }
        return null;
    }

    @CrossOrigin
    @RequestMapping(value = "/addOldTest", method = RequestMethod.GET)
    public Test4Group addOldTest(@RequestParam("idGroup") String groupId, @RequestParam("idTest") String idTest) {
        try {
            Test4Group addedTest = new Test4Group();
            addedTest.setIdTest(Integer.valueOf(idTest));
            addedTest.setIdGroup(groupId);
            return test4GroupService.addTest(addedTest);
        } catch (NullPointerException e) {
            System.out.println("no no no");
        }
        return null;
    }

}
