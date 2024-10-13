import java.util.Scanner;
import java.util.Random;

public class Expression {
    public static void main(String[] args) {
        // ! First Expression
        int y = 7;
        int x = ++y * 8;
        System.out.println("the value of x:" + x);

        // ? Second Expression
        float a = 7 / 4f * 9 / 2f;
        System.out.println("the value of a:" + a);

        // * */ Third Expression
        char Grade = 'A';
        Grade += 8;
        System.out.println("The encrypted Grade:" + Grade);
        Grade -= 8;
        System.out.println("The Decrypted Grade:" + Grade);

        Scanner Value = new Scanner(System.in);
        Random rand = new Random();

        System.out.print("Please Enter a Number:");
        int Entered = Value.nextInt();

        int Genrated = rand.nextInt(1000);

        System.out.println("The Given Number:" + Genrated);
        System.out.println("The Entered Number:" + Entered);

        if (Entered > Genrated) {
            System.out.println("Entered Number is Greater");
        } else if (Entered == Genrated) {
            System.out.println("Both Numbers are Equal");
        } else if (Entered < Genrated) {
            System.out.println("Genrated Number is Greater");
        }

        Value.close();
        
        //! Fourth Expression
        int b=7*49/7+35/7;
        System.out.println("The value of b:"+b);
    }
}
