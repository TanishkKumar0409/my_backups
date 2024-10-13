import java.util.Scanner;

public class Array {
    public static void main(String[] args) {
        Scanner Value = new Scanner(System.in);

        // ! First Set
        System.out.println("Enter the Values");
        float[] Numbers = new float[5];
        float Sum = 0F;
        for (int i = 0; i <= Numbers.length - 1; i++) {
            System.out.print(i + 1 + " Number: ");
            Numbers[i] = Value.nextFloat();
        }

        for (int i = 0; i <= Numbers.length - 1; i++) {
            Sum = Sum + Numbers[i];
        }
        System.out.println("The Sum of these Numbers: " + Sum);

        // ? Second Set
        System.out.println("Enter the Values of Array:");
        int[] SearchArray = new int[5];
        for (int i = 0; i <= SearchArray.length - 1; i++) {
            System.out.print(i + 1 + " Number: ");
            SearchArray[i] = Value.nextInt();
        }

        System.out.print("Enter the Value to Find: ");
        int Search = Value.nextInt();
        for (int i = 0; i <= SearchArray.length - 1; i++) {
            if (SearchArray[i] == Search) {
                System.out.println("This Number is Present in the array at index " + i +
                        ".");
            }
        }

        // * Third Set */
        System.out.println("Enter the Marks:");
        int[] Marks = new int[5];
        int Total = 0;
        for (int i = 0; i < Marks.length; i++) {
            System.out.print(i + 1 + " Subject: ");
            Marks[i] = Value.nextInt();
            Total = Total + Marks[i];
        }
        float Average = Total / 5;
        System.out.println("Average Marks of Student: " + Average);

        // ! Fourth Set
        System.out.println("Enter The Array");
        int[] RArray = new int[5];
        int[] Reverse = new int[5];

        for (int i = 0; i < RArray.length; i++) {
            System.out.print(i + 1 + " Number: ");
            RArray[i] = Value.nextInt();
        }
        for (int i = 0; i < RArray.length; i++) {
            Reverse[i] = RArray[RArray.length - i - 1];
        }

        System.out.println("Reverse Array");
        for (int i = 0; i < Reverse.length; i++) {
            System.out.println(i + 1 + " Number " + Reverse[i]);
        }

        // ? Fifth Set
        System.out.println("Enter the Array: ");
        int[] MAX = new int[5];
        int MAXNumber = 0;
        for (int i = 0; i < MAX.length; i++) {
            System.out.print(i + 1 + " Number: ");
            MAX[i] = Value.nextInt();
        }
        for (int i = 1; i <= MAX.length; i++) {
            if (MAX[i - 1] > MAXNumber) {
                MAXNumber = MAX[i - 1];
            }
        }
        System.out.println(MAXNumber);

        // ? Fifth Set
        System.out.println("Enter the Array: ");
        int[] MIN = new int[5];
        int MINNumber = 0;
        for (int i = 0; i < MIN.length; i++) {
            System.out.print(i + 1 + " Number: ");
            MIN[i] = Value.nextInt();
        }
        MINNumber = MIN[0];
        for (int i = 1; i <= MIN.length; i++) {
            if (MIN[i - 1] <= MINNumber) {
                MINNumber = MIN[i - 1];
            }
        }
        System.out.println(MINNumber);

        // * Sixth Set */
        System.out.println("Enter the Array: ");
        int[] SortArray = new int[5];
        int extra = 0;
        for (int i = 0; i < SortArray.length; i++) {
            System.out.print(i + 1 + " Number: ");
            SortArray[i] = Value.nextInt();
        }
        for (int i = 0; i < SortArray.length; i++) {
            for (int j = 0; j < SortArray.length - i - 1; j++) {
                if (SortArray[j] > SortArray[j + 1]) {
                    extra = SortArray[j];
                    SortArray[j] = SortArray[j + 1];
                    SortArray[j + 1] = extra;
                }
            }
        }

        for (int i = 0; i < SortArray.length; i++) {
            System.out.println(SortArray[i]);
        }

        Value.close();
    }
}
