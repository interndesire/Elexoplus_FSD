USE employee_management_system;

CREATE TABLE targets (

    target_id CHAR(36) PRIMARY KEY,
    assigned_by_employee_id CHAR(36) NOT NULL,
    assigned_to_employee_id CHAR(36) NOT NULL,
    assignment_type ENUM('Individual','Team') NOT NULL,
    target_type_id CHAR(36) NOT NULL,
    target_period ENUM('Monthly','Quarterly') NOT NULL,
    target_title VARCHAR(255) NOT NULL,
    target_description TEXT,
    target_value DECIMAL(12,2) NOT NULL,
    achieved_value DECIMAL(12,2) DEFAULT 0.00,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status ENUM('Pending','Active','Completed','Cancelled') NOT NULL DEFAULT 'Pending',
    remarks TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_target_assigned_by
        FOREIGN KEY (assigned_by_employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_target_assigned_to
        FOREIGN KEY (assigned_to_employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_target_type
        FOREIGN KEY (target_type_id)
        REFERENCES target_types(target_type_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);

CREATE INDEX idx_target_employee
ON targets(assigned_to_employee_id);

CREATE INDEX idx_target_type
ON targets(target_type_id);

CREATE INDEX idx_target_status
ON targets(status);