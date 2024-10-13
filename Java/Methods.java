import java.util.Scanner;

public class Methods {
    static void Table(int n) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " * " + i + " = " + (n * i));
        }
    }

    static void pattern(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }

    static void ReversePattern(int n) {
        for (int i = n; i >= 0; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }

    static int NaturalSum(int n) {
        int Sum = n;
        if (n > 0) {
            Sum = Sum + NaturalSum(n - 1);
        }
        return Sum;
    }

    static void Fibonacci(int n) {
        int First = 0;
        int Second = 1;
        int Third = 0;
        for (int i = 0; i < n; i++) {
            System.out.println(Third);
            Third = First + Second;
            First = Second;
            Second = Third;
        }
    }

    static float Average(float... n) {
        float average = 0;
        for (float i : n) {
            average += i;
        }
        average = average / n.length;
        return average;
    }

    public static void main(String[] args) {
        Scanner Values = new Scanner(System.in);
        System.out.print("Enter The Number for All Methods:");
        int Number = Values.nextInt();
        Table(Number);
        pattern(Number);
        int s = NaturalSum(Number);
        System.out.println(s);
        ReversePattern(Number);
        Fibonacci(Number);
        float av = Average(15, 20, 30,5,89);
        System.out.println(av);
        Values.close();
    }
}
