package login_registro.com.login_registro.Model;

import jakarta.validation.constraints.NotBlank;

public record UserResponse(
    @NotBlank String nombre,
    @NotBlank String apellidos,
    @NotBlank String correo,
    @NotBlank String contrasena,
    @NotBlank String rol
) {

    
}
