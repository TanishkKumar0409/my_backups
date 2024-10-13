
import java.util.Scanner;

public class Condionals {

    public static void main(String[] args) {
        Scanner Value = new Scanner(System.in);
        // ! First Set
        int a = 10;
        if (a == 11) {
            System.out.println("I am 11");
        } else {
            System.out.println("I am not 11");
        }

        // ? Second Set
        System.out.print("Enter Marks of Your First Subject:");
        int First = Value.nextInt();
        System.out.print("Enter Marks of Your Second Subject:");
        int Second = Value.nextInt();
        System.out.print("Enter Marks of Your Third Subject:");
        int Third = Value.nextInt();
        int Total = First + Second + Third;
        Float Percentage = (Total / 300f) * 100;
        System.out.println(Percentage);
        if (Percentage >= 40) {
            System.out.println("Your are Pass");
        } else if (Percentage <= 33) {
            System.out.println("Your are Fail");
        }

        // * Third Set */
        System.out.print("Please Enter your Annual Salary:");
        int Salary = Value.nextInt();
        if (Salary >= 250000 && Salary < 500000) {
            float Tax = (Salary / 100f) * 5;
            System.out.println("You Have to Pay 5% Tax and Your income 5% is " + Tax);
        } else if (Salary >= 500000 && Salary < 1000000) {
            float Tax = (Salary / 100f) * 20;
            System.out.println("You Have to Pay 20% Tax and Your income 20% is " + Tax);
        } else if (Salary >= 100000) {
            float Tax = (Salary / 100f) * 30;
            System.out.println("You Have to Pay 30% Tax and Your income 30% is " + Tax);
        } else if (Salary < 250000) {
            System.out.println("You Don't Have to Pay Tax");
        }

        // ! Fourth Set
        System.out.print("Please Enter the Number to Find Day:");
        int DayNumber = Value.nextInt();
        switch (DayNumber) {
            case 1 ->
                System.out.println("Monday");
            case 2 ->
                System.out.println("Tuseday");
            case 3 ->
                System.out.println("Wednesday");
            case 4 ->
                System.out.println("Thursday");
            case 5 ->
                System.out.println("Friday");
            case 6 ->
                System.out.println("Saturday");
            case 7 ->
                System.out.println("Sunday");
        }

        // ? Fifth Set
        System.out.print("Please Enter a Year:");
        int Year = Value.nextInt();
        if (Year % 4 == 0) {
            System.out.println("This is a Leap Year");
        } else if (Year % 4 == 1) {
            System.out.println("This is not a Leap Year");
        }

        // * Sixth Set */
        System.out.print("Please Enter The Url");
        String URL = Value.nextLine();
        if (URL.endsWith(".com")) {
            System.out.println("This is Commercial Website");
        } else if (URL.endsWith(".org")) {
            System.out.println("This is Organizational Website");
        } else if (URL.endsWith(".in")) {
            System.out.println("This is Indian Website");
        }

        Value.close();
    }
}
