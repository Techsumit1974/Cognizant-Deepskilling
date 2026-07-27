import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class Exercise4Test {
    @Test
    public void testHandlingVoidMethods() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        doNothing().when(mockApi).performAction();
        service.triggerAction();
        verify(mockApi).performAction();
    }
}