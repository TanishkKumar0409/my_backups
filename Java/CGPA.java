import java.util.Scanner;

public class CGPA {
    public static void main(String[] args) {
        Scanner Value = new Scanner(System.in);
        System.out.println("Please Enter Your Marks");
        System.out.print("First: ");
        int First = Value.nextInt();
        System.out.print("Second: ");
        int Second = Value.nextInt();
        System.out.print("Third: ");
        int Third = Value.nextInt();
        System.out.print("fouth: ");
        int fouth = Value.nextInt();
        System.out.print("Fifth: ");
        int Fift = Value.nextInt();
        if (First < 100 && Second < 100 && Third < 100 && fouth < 100 && Fift < 100) {
            int Total = First + Second + Third + fouth + Fift;
            System.out.println("Total Obtained: " + Total);
            float CGPA = Total / 500f;
            System.out.println("CGPA: " + CGPA * 10);
        } else if (First > 100 || Second > 100 || Third > 100 || fouth > 100 || Fift > 100) {
            System.out.println("You Entered Incorrect Marks");
        }
        Value.close();
    }
}
