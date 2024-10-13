import java.util.Scanner;

public class addThreeNumbers {
    public static void main(String[] args) {
        Scanner Value=new Scanner(System.in);
        System.out.print("Please Enter First Number: ");
        int First=Value.nextInt();
        System.out.print("Please Enter Second Number: ");
        int Second=Value.nextInt();
        System.out.print("Please Enter Third Number: ");
        int Third=Value.nextInt();
        int Sum=First+Second+Third;
        System.out.println("The Sum of these numbers :"+Sum);
        Value.close();
    }
}
