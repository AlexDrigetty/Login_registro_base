package login_registro.com.login_registro.Service;

import org.springframework.stereotype.Service;

import login_registro.com.login_registro.Enum.Roles;
import login_registro.com.login_registro.Model.LoginRequest;
import login_registro.com.login_registro.Model.User;
import login_registro.com.login_registro.Model.UserRequest;
import login_registro.com.login_registro.Model.UserResponse;
import login_registro.com.login_registro.config.exceptions.Credenciales_Invalidas;
import login_registro.com.login_registro.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;

    public UserResponse registro(UserRequest res) {
        User u = new User();
        u.setNombre(res.nombre());
        u.setApellidos(res.apellidos());
        u.setCorreo(res.correo());
        u.setContrasena(res.contrasena());
        u.setRol(Roles.CLIENTE);

        repository.save(u);

        return new UserResponse(u.getNombre(), u.getApellidos(), u.getCorreo(), u.getContrasena(), u.getRol().name());
    }

    public UserResponse login(LoginRequest request) {

        User usuario = repository.findByCorreo(request.correo().toLowerCase().trim())
                .orElseThrow(() -> new Credenciales_Invalidas("correo no se ha encontrado"));

        if (!usuario.getContrasena().equals(request.contrasena())) {
            throw new Credenciales_Invalidas("contraseña incorrecta");
        }

        return new UserResponse(usuario.getNombre(), usuario.getApellidos(), usuario.getCorreo(),
                usuario.getContrasena(), usuario.getRol().name());
    }
}