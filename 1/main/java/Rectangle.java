public class Rectangle {
    double a;
    double b;

    public double getA() {
        return a;
    }

    public double getB() {
        return b;
    }

    public Rectangle(double a, double b) {
        this.a = a;
        this.b = b;
    }

    public Rectangle() {
    }

    public double getArea() {
        return a * b;
    }

    public double getPerimeter() {
        return (2 * (a + b));
    }
}

class Runner {
    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle(12, 21);

        if (rectangle.getA() <= 0 || rectangle.getB() <= 0) {
            System.out.println("error");
        } else {
            System.out.println(rectangle.getArea());
            System.out.println(rectangle.getPerimeter());
        }
    }
}