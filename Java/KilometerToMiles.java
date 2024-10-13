import java.util.Scanner;

public class KilometerToMiles {
    public static void main(String[] args) {
        Scanner Value = new Scanner(System.in);
        System.out.print("Please Enter Your The Value to Convert: ");
        float Kilo = Value.nextFloat();
        float Miles = Kilo / 1.609f;
        System.out.println("Miles: " + Miles);
        Value.close();
    }
}
