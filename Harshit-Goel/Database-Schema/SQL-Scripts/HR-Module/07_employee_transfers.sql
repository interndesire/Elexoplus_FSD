USE employee_management_system;

CREATE TABLE employee_transfers (

    transfer_id CHAR(36) PRIMARY KEY,
    employee_id CHAR(36) NOT NULL,
    from_department_id CHAR(36) NOT NULL,
    to_department_id CHAR(36) NOT NULL,
    from_designation_id CHAR(36) NOT NULL,
    to_designation_id CHAR(36) NOT NULL,
    transfer_date DATE NOT NULL,
    transfer_reason TEXT NOT NULL,
    approved_by_employee_id CHAR(36),
    status ENUM(
        'Pending',
        'Approved',
        'Rejected'
    ) NOT NULL DEFAULT 'Pending',
    created_at DATETIME NOT NULL
        DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL
        DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_transfer_employee
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    CONSTRAINT fk_transfer_from_department
        FOREIGN KEY (from_department_id)
        REFERENCES departments(department_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    CONSTRAINT fk_transfer_to_department
        FOREIGN KEY (to_department_id)
        REFERENCES departments(department_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    CONSTRAINT fk_transfer_from_designation
        FOREIGN KEY (from_designation_id)
        REFERENCES designations(designation_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    CONSTRAINT fk_transfer_to_designation
        FOREIGN KEY (to_designation_id)
        REFERENCES designations(designation_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    CONSTRAINT fk_transfer_approved_by
        FOREIGN KEY (approved_by_employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);

CREATE INDEX idx_transfer_employee
ON employee_transfers(employee_id);

CREATE INDEX idx_transfer_approved_by
ON employee_transfers(approved_by_employee_id);

CREATE INDEX idx_transfer_date
ON employee_transfers(transfer_date);