import org.junit.jupiter.api.Test;
import java.time.Duration;
import static org.junit.jupiter.api.Assertions.assertTimeout;

public class PerformanceTesterTest {

    @Test
    void testPerformTaskCompletesWithinTimeout() {
        PerformanceTester tester = new PerformanceTester();

        // Fails if performTask() takes longer than 100 milliseconds
        assertTimeout(Duration.ofMillis(100), () -> {
            tester.performTask();
        });
    }
}