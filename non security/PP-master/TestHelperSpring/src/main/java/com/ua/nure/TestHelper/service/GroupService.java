package com.ua.nure.TestHelper.service;

import com.ua.nure.TestHelper.domain.Group;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface GroupService {
    Group addGroup(Group group);

    void delete(long id);

    Group getById(long id);

    Group getByLink(String link);

    Group editGroup(Group group);

    List<Group> getAll();
}
