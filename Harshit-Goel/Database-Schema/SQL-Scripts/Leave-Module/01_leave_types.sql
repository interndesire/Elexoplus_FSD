USE employee_management_system;

CREATE TABLE leave_types (

    leave_type_id CHAR(36) PRIMARY KEY,
    leave_type_name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT NULL,
    max_allowed_days INT NOT NULL,
    is_paid BOOLEAN NOT NULL DEFAULT TRUE,
    status ENUM('Active','Inactive') NOT NULL DEFAULT 'Active',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);

CREATE INDEX idx_leave_type_status
ON leave_types(status);