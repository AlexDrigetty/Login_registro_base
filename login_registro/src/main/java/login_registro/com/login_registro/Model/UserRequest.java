package login_registro.com.login_registro.Model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UserRequest(
    @NotBlank @Size(min = 3, max = 100) String nombre,
    @NotBlank @Size(min = 3, max = 100) String apellidos,
    @NotBlank @Email String correo,
    @NotBlank @Size(min = 8, max = 72) String contrasena
) {} 