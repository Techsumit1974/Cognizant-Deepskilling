import java.util.*;
import org.junit.*;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

@RunWith(Parameterized.class)
public class EvenCheckerTest {
  int number;
  boolean expected;

  public EvenCheckerTest(int number, boolean expected) {
    this.number = number;
    this.expected = expected;
  }

  @Parameterized.Parameters
  public static Collection<Object[]> data() {
    return Arrays.asList(new Object[][] {
      {2, true},
      {4, true},
      {9, false},
      {11, false}
    });
  }

  @Test
  public void testIsEven() {
    EvenChecker check = new EvenChecker();
    Assert.assertEquals(expected, check.isEven(number));
  }

}