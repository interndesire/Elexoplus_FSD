USE employee_management_system;

CREATE TABLE user_roles (

    user_role_id CHAR(36) PRIMARY KEY,
    user_id CHAR(36) NOT NULL,
    role_id CHAR(36) NOT NULL,
    assigned_by CHAR(36) NOT NULL,
    assigned_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Active','Revoked' ) NOT NULL DEFAULT 'Active',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT uq_user_role
        UNIQUE (user_id, role_id),
    CONSTRAINT fk_user_role_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    CONSTRAINT fk_user_role_role
        FOREIGN KEY (role_id)
        REFERENCES roles(role_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    CONSTRAINT fk_user_role_assigned_by
        FOREIGN KEY (assigned_by)
        REFERENCES users(user_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);

CREATE INDEX idx_user_role_role
ON user_roles(role_id);