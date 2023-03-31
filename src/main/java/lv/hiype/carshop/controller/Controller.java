package lv.hiype.carshop.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class Controller {

    @GetMapping("/greeting")
    @ResponseBody
    public Map<String, Object> greeting() {
        Map<String, Object> model = new HashMap<>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hi!");
        return model;
    }
}
