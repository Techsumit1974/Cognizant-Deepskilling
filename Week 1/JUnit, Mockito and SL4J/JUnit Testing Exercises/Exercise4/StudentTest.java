package Exercise4;
import org.junit.*;
public class StudentTest {
    private Student student;

    @Before
    public void setUp() {
        student = new Student();
        System.out.println("Creating Student Object");
    }

    @After
    public void tearDown() {
        student = null;
        System.out.println("Destroying Student Object");
    }

    @Test
    public void testPassStudent() {
        int marks = 75;
        String result = student.getGrade(marks);
        Assert.assertEquals("Pass", result);
    }

    @Test
    public void testFailStudent() {
        int marks = 25;
        String result = student.getGrade(marks);
        Assert.assertEquals("Fail", result);
    }
}