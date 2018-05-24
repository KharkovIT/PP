package com.ua.nure.TestHelper.repository;

import com.ua.nure.TestHelper.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.lang.annotation.Native;
import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmailAndPassword(String email, String password);

    User findByEmail(String email);


    @Query(value = "SELECT * FROM users,groups WHERE users.id_user = groups.id_student AND groups.link =?1", nativeQuery = true)
    List<User> findAllStudentsByLink(String Link);
}
