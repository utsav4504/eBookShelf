package LibraryManagementSystem.LMS.controller;
import LibraryManagementSystem.LMS.entity.User;
import LibraryManagementSystem.LMS.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }
// build create student REST API
    @PostMapping
    public User addUser(@RequestBody User user) {
        return userService.save(user);
    }
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteById(id);
    }
}
