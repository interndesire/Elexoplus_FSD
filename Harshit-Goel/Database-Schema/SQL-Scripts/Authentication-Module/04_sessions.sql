USE employee_management_system;

CREATE TABLE sessions (

    session_id CHAR(36) PRIMARY KEY,
    user_id CHAR(36) NOT NULL,
    access_token VARCHAR(1000) NOT NULL,
    refresh_token VARCHAR(1000) NOT NULL UNIQUE,
    status ENUM( 'Active', 'Expired', 'Revoked') NOT NULL DEFAULT 'Active',
    expires_at DATETIME NOT NULL,
    last_activity_at DATETIME,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_session_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);

CREATE INDEX idx_session_user
ON sessions(user_id);
CREATE INDEX idx_session_status
ON sessions(status);
CREATE INDEX idx_session_expires
ON sessions(expires_at);