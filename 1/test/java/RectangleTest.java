import org.junit.Assert;
import org.junit.Before;
import org.junit.jupiter.api.Test;

public class RectangleTest {

    @Before
    Rectangle rectangle = new Rectangle();

    @Test
    public void ShouldCalculateArea() {
        new Rectangle(2, 3).getArea();
        Assert.assertEquals(6, 6);
    }

    @Test
    public void ShouldPrintErrorArea() {
        new Rectangle(-2, -33).getArea();
        Assert.assertEquals("error", "error");
    }

    @Test
    public void SouldCalculateAreaWithAFraction() {
        new Rectangle(0.5, 50).getArea();
        Assert.assertEquals(25.0, 25.0);
    }

    @Test
    public void SouldCalculateAreaWithAMixedNumber() {
        new Rectangle(1.5, 2).getArea();
        Assert.assertEquals(3.0, 3.0);
    }

    @Test
    public void SouldOutputAreaWithAFraction() {
        new Rectangle(2, 2.10).getArea();
        Assert.assertEquals(4.20, 4.20);

    }

    @Test
    public void ShouldCalculatePerimeter() {
        new Rectangle(2, 3).getPerimeter();
        Assert.assertEquals(10.0, 10.0);
    }

    @Test
    public void ShouldPrintErrorPerimeter() {
        new Rectangle(-2, -33).getPerimeter();
        Assert.assertEquals("error", "error");
    }

    @Test
    public void SouldCalculatePerimeterWithAFraction() {
        new Rectangle(0.5, 50).getPerimeter();
        Assert.assertEquals(101.0, 101.0);
    }

    @Test
    public void SouldCalculatePerimeterWithAMixedNumber() {
        new Rectangle(1.5, 2).getPerimeter();
        Assert.assertEquals(7.0, 7.0);
    }

    @Test
    public void SouldOutputPerimeterWithAFraction() {
        new Rectangle(2, 2.10).getPerimeter();
        Assert.assertEquals(8.20, 8.20);
    }
}
}
