import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class Exercise7Test {
    @Test
    public void testVoidMethodWithException() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        doThrow(new RuntimeException("API Failure")).when(mockApi).performAction();
        assertThrows(RuntimeException.class, () -> {
            service.triggerAction();
        });
        verify(mockApi).performAction();
    }
}