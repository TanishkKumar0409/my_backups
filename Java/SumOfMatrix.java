import java.util.Scanner;

public class SumOfMatrix {
    public static void main(String[] args) {
        Scanner Value = new Scanner(System.in);

        System.out.println("Enter the First Matrix: ");
        int[][] MatA = new int[2][3];
        int[][] MatB = new int[2][3];
        int[][] Sum = new int[2][3];
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 3; j++) {
                MatA[i][j] = Value.nextInt();
            }
        }

        System.out.println("Enter the Second Matrix: ");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 3; j++) {
                MatB[i][j] = Value.nextInt();
            }
        }

        System.out.println("The Sum Of Matrices: ");
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 3; j++) {
                Sum[i][j] = MatA[i][j] + MatB[i][j];
                System.out.print(Sum[i][j] + " ");
            }
            System.out.println("");
        }

        Value.close();
    }
}
