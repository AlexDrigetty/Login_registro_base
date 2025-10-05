package login_registro.com.login_registro.Model;

import java.time.LocalDateTime;

public record ErrorResponse(
        String mensaje,
        String error,
        String status,
        String path,
        LocalDateTime time) {

    public static ErrorResponse of(String msg, String err, String status, String path, LocalDateTime time) {
        return new ErrorResponse(msg, err, status, path, time);
    };
}
