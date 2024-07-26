package LibraryManagementSystem.LMS.JpaRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import LibraryManagementSystem.LMS.entity.User;
public interface UserRepository extends JpaRepository<User, Long> {

}

