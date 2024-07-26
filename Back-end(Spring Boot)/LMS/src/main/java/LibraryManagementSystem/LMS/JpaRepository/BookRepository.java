package LibraryManagementSystem.LMS.JpaRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import LibraryManagementSystem.LMS.entity.Book;
public interface BookRepository extends JpaRepository<Book, Long> {

}
