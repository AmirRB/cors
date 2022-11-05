package com.example.cors.controller;


import com.example.cors.dto.DTO;
import org.springframework.web.bind.annotation.*;

@RestController
public class SinmpleApi {

    @GetMapping
    public DTO get() {
        return new DTO("get");
    }

    @PostMapping
    public DTO post() {
        return new DTO("post");
    }

    @PutMapping
    public DTO put() {
        return new DTO("put");
    }

    @DeleteMapping
    public DTO delete() {
        return new DTO("delete");
    }

}
