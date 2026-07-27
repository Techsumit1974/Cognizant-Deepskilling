import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class ExceptionThrowerTest {

    @Test
    void testThrowException() {
        ExceptionThrower thrower = new ExceptionThrower();

        // Verify that the exact exception is thrown
        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            thrower.throwException();
        });

        // Optional: Verify the exception message
        assertEquals("Invalid argument provided", exception.getMessage());
    }
}