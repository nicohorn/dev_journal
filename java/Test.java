
import java.util.Scanner;

public class Test {


    
    public static void main(String[] args) {
        TerminalMessages tm = new TerminalMessages();
        ReadInputs ipts = new ReadInputs();
        tm.Welcome();
        tm.SelectOperation();
        ipts.readOperation();
    }

    
    public static class TerminalMessages {
       

        public void Welcome(){
            System.out.print("\n\n\nJava Terminal calculator\n\n\n");
        }

        public void SelectOperation(){
            System.out.println("\nSelect an operation: + | x | % | -\n");
        }

        public void EnterFirstNumber(){
            System.out.println("\nEnter second number");
        }

        public void EnterSecondNumber(){
            System.out.println("\nEnter first number");
        }

        public void Result(String result){
            System.out.print("The result is: " + result);
        }
    }


    public static class ReadInputs{

        Scanner scanner = new Scanner(System.in);

        public String readOperation(){
            String operation = scanner.next();
            return operation;
        }

    
    }

    public static class Calcultor{
        private String operation;
        private double n1;
        private double n2;
    }
}