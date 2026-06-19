USE employee_management_system;

CREATE TABLE deductions (

    deduction_id CHAR(36) PRIMARY KEY,
    employee_id CHAR(36) NOT NULL,
    payroll_id CHAR(36) NOT NULL,
    deduction_name VARCHAR(100) NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    reason TEXT,
    approved_by_employee_id CHAR(36) NULL,
    approved_at DATETIME NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_deduction_employee
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_deduction_payroll
        FOREIGN KEY (payroll_id)
        REFERENCES payrolls(payroll_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_deduction_approved_by
        FOREIGN KEY (approved_by_employee_id)
        REFERENCES employees(employee_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE

);

CREATE INDEX idx_deduction_employee
ON deductions(employee_id);

CREATE INDEX idx_deduction_payroll
ON deductions(payroll_id);

CREATE INDEX idx_deduction_approved_by
ON deductions(approved_by_employee_id);