USE employee_management_system;

CREATE TABLE employee_exits (

    exit_id CHAR(36) PRIMARY KEY,
    employee_id CHAR(36) NOT NULL,
    exit_type ENUM('Resignation','Termination','Retirement','Contract End') NOT NULL,
    resignation_date DATE,
    last_working_date DATE NOT NULL,
    exit_reason TEXT NOT NULL,
    approved_by_employee_id CHAR(36),
    exit_status ENUM('Pending','Approved','Completed') NOT NULL DEFAULT 'Pending',
    remarks TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_exit_employee
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    CONSTRAINT fk_exit_approved_by
        FOREIGN KEY (approved_by_employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);

CREATE INDEX idx_exit_employee
ON employee_exits(employee_id);

CREATE INDEX idx_exit_status
ON employee_exits(exit_status);

CREATE INDEX idx_exit_type
ON employee_exits(exit_type);