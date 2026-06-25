package Exercise2;
import org.junit.*;
public class EvenCheckerTest {
    @Test
    public void testEven() {
        Assert.assertTrue(4 % 2 == 0);
    }
}