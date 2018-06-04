package com.ua.nure.TestHelper.utils;

import org.apache.http.HttpHeaders;
import org.eclipse.jgit.api.Git;
import org.eclipse.jgit.api.PushCommand;
import org.eclipse.jgit.api.errors.GitAPIException;
import org.eclipse.jgit.lib.Repository;
import org.eclipse.jgit.transport.UsernamePasswordCredentialsProvider;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.awt.image.RenderedImage;
import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.io.File;
import java.io.IOException;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

public class Utils {


    public void getCroppImages(MultipartFile originalImage) throws IOException {

        List<String> imagesPath = new ArrayList<>();
        int x = 50;
        int y = 141;
        BufferedImage image = ImageIO.read(originalImage.getInputStream());
        for (int i = 1; i <= 12; i++) {
            if (i == 7) {
                x = 406;
                y = 141;
            }
            String path = "C:\\Users\\Student-Alexandr\\Desktop\\non security\\PP-master\\TestHelperSpring\\src\\main\\resources\\images\\question" + i + ".jpg";
            RenderedImage cropped = image.getSubimage(x, y, 279, 72);
            File savedFile = new File(path);
            ImageIO.write(cropped, "jpg", savedFile);
            imagesPath.add(path);
            y += 72;
            sendRequest(path);
        }

    }

    private void sendRequest(String path) throws IOException {

        HttpClient httpclient = new DefaultHttpClient();
        HttpPost httppost = new HttpPost("https://salty-retreat-16089.herokuapp.com/https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=0ab5b7aba3ca941f50b6c2985920e06b62a74d55&version=2016-05-20");

        httppost.addHeader(HttpHeaders.CONTENT_TYPE, "multipart/form-data");
        httppost.addHeader(HttpHeaders.ACCEPT, "application/json");
        httppost.addHeader(HttpHeaders.ACCEPT_LANGUAGE, "en");
        httppost.addHeader("origin", "*");

        File fileToUse = new File(path); //e.g. /temp/dinnerplate-special.jpg
        FileBody image = new FileBody(fileToUse);

        MultipartEntity reqEntity = new MultipartEntity();
        try {
            reqEntity.addPart("classifier_ids", new StringBody("checkingtest_668997330") );
            reqEntity.addPart("images_file", image);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        httppost.setEntity(reqEntity);

        HttpResponse response = httpclient.execute(httppost);
        System.out.println( response ) ;

        HttpEntity resEntity = response.getEntity();
        System.out.println( resEntity ) ;
        System.out.println( EntityUtils.toString(resEntity) );

        EntityUtils.consume(resEntity);
        httpclient.getConnectionManager().shutdown();
    }


}






