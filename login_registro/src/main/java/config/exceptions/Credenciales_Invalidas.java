package config.exceptions;

public class Credenciales_Invalidas extends RuntimeException  {
    
    public Credenciales_Invalidas (String mensaje){
        super(mensaje);
    }
}
