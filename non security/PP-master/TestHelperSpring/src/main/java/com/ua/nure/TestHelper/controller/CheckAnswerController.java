package com.ua.nure.TestHelper.controller;


import com.ua.nure.TestHelper.utils.Image;
import com.ua.nure.TestHelper.utils.Utils;
import org.apache.commons.io.IOUtils;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sun.nio.ch.Util;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RestController
@RequestMapping("/check")
public class CheckAnswerController {


    @CrossOrigin
    @RequestMapping(value = "/sendFile", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void upload(@RequestParam(value = "image") MultipartFile file) throws IOException {
         new Utils().getCroppImages(file);
    }


}
