package com.ua.nure.TestHelper.service;


import com.ua.nure.TestHelper.domain.Result;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface ResultService {

    Result addResult(Result result);

    void delete(long id);

    Result getById(long id);

    Result editResult(Result result);

    List<Result> getAll();
}
