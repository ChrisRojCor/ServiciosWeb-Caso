package edu.loginback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserAPI {

    @Autowired
    private UserDAO userDAO;

    @GetMapping("/read")
    public List<User> read(){return userDAO.findAll();}

}
