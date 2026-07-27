public class Main{
public static void main(String[] args){
Logger l1=Logger.getInstance();
Logger l2=Logger.getInstance();
l1.log("Singleton Pattern");
System.out.println("Same instance: "+(l1==l2));
}
}