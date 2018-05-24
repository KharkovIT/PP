package com.ua.nure.TestHelper.service;

import com.ua.nure.TestHelper.domain.Template;
import com.ua.nure.TestHelper.domain.Test;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface TestService {
    Test addTest(Test test);

    void delete(long id);

    Test getById(long id);

    Test editTest(Test test);

    List<Test> getAll();
}
