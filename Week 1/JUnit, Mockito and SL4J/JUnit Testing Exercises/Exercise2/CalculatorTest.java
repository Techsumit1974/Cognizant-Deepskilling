import org.junit.*;

public class CalculatorTest {
  Calculator calc = new Calculator();
  @Test
  public void testAdd() {
    Assert.assertEquals(8, calc.add(5, 3));
  }
  public void testmultiply() {
    Assert.assertEquals(15, calc.multiply(5, 3));
  }
}