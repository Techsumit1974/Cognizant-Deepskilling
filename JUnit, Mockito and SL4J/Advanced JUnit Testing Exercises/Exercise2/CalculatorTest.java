package Exercise2;
import org.junit.*;
public class CalculatorTest {

    @Test
    public void testAdd() {
        Assert.assertEquals(5, 2 + 3);
    }
}