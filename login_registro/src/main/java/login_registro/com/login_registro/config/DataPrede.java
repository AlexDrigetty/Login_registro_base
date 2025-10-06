package login_registro.com.login_registro.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import login_registro.com.login_registro.Enum.Roles;
import login_registro.com.login_registro.Model.User;
import login_registro.com.login_registro.repository.UserRepository;

@Configuration
public class DataPrede {

    /*
     * Creamos desde java un usuario con el rol de admin
     * donde usaremos como parametro el UserRepository para 
     * usar el metodo de findByCorreo para evitar duplicados de correos,
     * donde en caso que no se encuentre el correo comienza a crear al usuario
     * con rol ADMIN
     */
    @Bean
    public CommandLineRunner CrearAdmin(UserRepository repository) {
        return args -> {
            String correo = "admin@test.com";

            if (repository.findByCorreo(correo).isEmpty()) {
                User user = new User();
                user.setNombre("admin");
                user.setApellidos("admin");
                user.setCorreo(correo);
                user.setContrasena("admin123");
                user.setRol(Roles.ADMIN);

                repository.save(user);
            }
        };
    }

    @Bean
    public CommandLineRunner CrearRol(UserRepository repository) {
        return args -> {
            String correo = "rol@test.com";

            if (repository.findByCorreo(correo).isEmpty()) {
                User user = new User();
                user.setNombre("rol");
                user.setApellidos("rol");
                user.setCorreo(correo);
                user.setContrasena("rol123");
                user.setRol(Roles.ROL);

                repository.save(user);
            }
        };
    }
}
