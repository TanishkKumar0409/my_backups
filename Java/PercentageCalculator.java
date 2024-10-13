import java.util.Scanner;

public class PercentageCalculator {
    public static void main(String[] args) {
        Scanner Value = new Scanner(System.in);
        System.out.println("Please Enter Your Marks");
        System.out.print("Hindi: ");
        int Hindi = Value.nextInt();
        System.out.print("English: ");
        int English = Value.nextInt();
        System.out.print("Mathematics: ");
        int Mathematics = Value.nextInt();
        System.out.print("Science: ");
        int Science = Value.nextInt();
        System.out.print("Social Studies: ");
        int SST = Value.nextInt();
        if (Hindi < 100 && English < 100 && Mathematics < 100 && Science < 100 && SST < 100) {
            int Total = Hindi + English + Mathematics + Science + SST;
            System.out.println("Total Obtained: " + Total);
            float Percentage = Total / 500f;
            System.out.println("Percentage: " + Percentage * 100 + "%");
        } else if (Hindi > 100 || English > 100 || Mathematics > 100 || Science > 100 || SST > 100) {
            System.out.println("You Entered Incorrect Marks");
        }
        Value.close();
    }
}
