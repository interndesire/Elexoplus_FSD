USE employee_management_system;

CREATE TABLE leave_balances (

    leave_balance_id CHAR(36) PRIMARY KEY,
    employee_id CHAR(36) NOT NULL,
    leave_type_id CHAR(36) NOT NULL,
    allocated_days INT NOT NULL DEFAULT 0,
    used_days INT NOT NULL DEFAULT 0,
    remaining_days INT NOT NULL DEFAULT 0,
    last_updated DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT uk_leave_balance_employee_type
        UNIQUE (
            employee_id,
            leave_type_id
        ),

    CONSTRAINT fk_leave_balance_employee
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_leave_balance_leave_type
        FOREIGN KEY (leave_type_id)
        REFERENCES leave_types(leave_type_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);