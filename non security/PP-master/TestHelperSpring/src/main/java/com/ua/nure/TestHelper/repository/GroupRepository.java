package com.ua.nure.TestHelper.repository;

import com.ua.nure.TestHelper.domain.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {
    Group findDistinctByLink(String link);
    Group findDistinctFirstByLink(String link);
}
