USE employee_management_system;

CREATE TABLE incentives (

    incentive_id CHAR(36) PRIMARY KEY,
    employee_id CHAR(36) NOT NULL,
    payroll_id CHAR(36) NOT NULL,
    incentive_name VARCHAR(100) NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    reason TEXT,
    approved_by_employee_id CHAR(36) NULL,
    approved_at DATETIME NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_incentive_employee
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_incentive_payroll
        FOREIGN KEY (payroll_id)
        REFERENCES payrolls(payroll_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_incentive_approved_by
        FOREIGN KEY (approved_by_employee_id)
        REFERENCES employees(employee_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE

);

CREATE INDEX idx_incentive_employee
ON incentives(employee_id);

CREATE INDEX idx_incentive_payroll
ON incentives(payroll_id);

CREATE INDEX idx_incentive_approved_by
ON incentives(approved_by_employee_id);