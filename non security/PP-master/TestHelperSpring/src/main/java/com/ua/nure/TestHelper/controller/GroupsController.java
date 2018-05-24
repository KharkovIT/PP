package com.ua.nure.TestHelper.controller;

import com.ua.nure.TestHelper.domain.Group;
import com.ua.nure.TestHelper.domain.Link;
import com.ua.nure.TestHelper.domain.User;
import com.ua.nure.TestHelper.service.GroupService;
import com.ua.nure.TestHelper.service.LinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/groups")
public class GroupsController {

    @Autowired
    GroupService groupService;

    @Autowired
    LinkService linkService;

    @CrossOrigin
    //@GetMapping("/getAllGroups")
    @RequestMapping(value = "/getAllGroups", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<Group> getGroups(@RequestBody User user) {
        List<Link> linkList = linkService.getAllByIdTeacher(user.getIdUser());
        List<Group> groupList = new ArrayList<>();
        for (Link item : linkList) {
            Group group = groupService.getByLink(item.getLink());
            if (group != null) {
                groupList.add(group);
            }
        }
        return groupList;
    }

}
