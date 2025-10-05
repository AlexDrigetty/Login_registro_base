package login_registro.com.login_registro.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import login_registro.com.login_registro.Model.User;

public interface UserRepository extends JpaRepository <User ,Long> {
    Optional<User> findByCorreo(String correo); 
}
