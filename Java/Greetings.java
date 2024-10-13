import java.util.Scanner;

public class Greetings {
    public static void main(String[] args) {
        Scanner Value=new Scanner(System.in);
        System.out.print("Please Enter Your Name: ");
        String Name=Value.nextLine();
        System.out.println("Hello "+Name+", Have a good day.");
        Value.close();
    }
}
