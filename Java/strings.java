import java.util.Scanner;

public class strings {
    public static void main(String[] args) {

        // ! Scanner Class
        Scanner Value = new Scanner(System.in);

        System.out.print("Please Enter a String to Convet in Lower Case:");
        String text1 = Value.nextLine();
        String LowerCase = text1.toLowerCase();
        System.out.println("Lower Case:" + LowerCase);

        // ? Replace Spaces with Underscores
        System.out.print("Please Enter a String to Replace Spaces with Underscore:");
        String text2 = Value.nextLine();
        String Replaced = text2.replace(" ", "_");
        System.out.println("Replaced Text:" + Replaced);

        // * */ Escaped Sequences
        System.out.print("Please Enter Your Name:");
        String Name = Value.nextLine();
        System.out.println("\"Dear " + Name + ", Thanks a log \"");

        // ! Double and Triple Spaces Detector
        System.out.println("Please enter a text with Double and Triple Spaces:");
        String text3 = Value.nextLine();
        int DoubleSpace = text3.indexOf("  ");
        int TripleSpace = text3.indexOf("   ");
        System.out.println("There are Double Space at index " + DoubleSpace);
        System.out.println("There are Triple Space at index " + TripleSpace);

        Value.close();
    }
}
