// File: Exercise7Test.java

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class Exercise7Test {

    @Autowired
    private UserRepository userRepository;

    @Test
    void testFindByName() {
        User user = new User();
        user.setId(1L);
        user.setName("Alice");
        userRepository.save(user);

        List<User> results = userRepository.findByName("Alice");

        assertFalse(results.isEmpty());
        assertEquals("Alice", results.get(0).getName());
    }
}