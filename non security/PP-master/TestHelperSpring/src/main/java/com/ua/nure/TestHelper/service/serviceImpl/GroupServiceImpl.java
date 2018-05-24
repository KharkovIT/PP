package com.ua.nure.TestHelper.service.serviceImpl;


import com.ua.nure.TestHelper.domain.Group;
import com.ua.nure.TestHelper.repository.GroupRepository;
import com.ua.nure.TestHelper.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "groupService")
public class GroupServiceImpl implements GroupService {
    @Autowired
    GroupRepository groupRepository;


    @Override
    public Group addGroup(Group group) {
        return groupRepository.saveAndFlush(group);
    }

    @Override
    public void delete(long id) {
        groupRepository.deleteById(id);
    }

    @Override
    public Group getById(long id) {
      return  groupRepository.findById(id).get();
    }

    @Override
    public Group getByLink(String link) {
       return groupRepository.findDistinctFirstByLink(link);
    }

    @Override
    public Group editGroup(Group group) {
       return groupRepository.saveAndFlush(group);
    }

    @Override
    public List<Group> getAll() {
        return groupRepository.findAll();
    }
}
