package LibraryManagementSystem.LMS.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import LibraryManagementSystem.LMS.entity.User;
import LibraryManagementSystem.LMS.JpaRepository.UserRepository;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User save(User user) {
        return userRepository.save(user);
    }
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }
}
