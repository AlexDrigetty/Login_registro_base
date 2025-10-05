package login_registro.com.login_registro.Service;

import org.springframework.stereotype.Service;

import login_registro.com.login_registro.Model.User;
import login_registro.com.login_registro.Model.UserRequest;
import login_registro.com.login_registro.Model.UserResponse;
import login_registro.com.login_registro.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;

    public UserResponse registro (UserRequest res){
        User u  = new User();
        u.setNombre(res.nombre());
        u.setApellidos(res.apellidos());
        u.setCorreo(res.correo());
        u.setContrasena(res.contrasena());

        repository.save(u);

        return new UserResponse(u.getNombre(), u.getApellidos(), u.getCorreo(), u.getContrasena());
    }
}
