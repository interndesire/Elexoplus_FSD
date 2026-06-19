USE employee_management_system;

CREATE TABLE payrolls (

    payroll_id CHAR(36) PRIMARY KEY,
    employee_id CHAR(36) NOT NULL,
    salary_structure_id CHAR(36) NOT NULL,
    payroll_month TINYINT NOT NULL,
    payroll_year YEAR NOT NULL,
    gross_salary DECIMAL(12,2) NOT NULL,
    total_incentives DECIMAL(12,2) NOT NULL DEFAULT 0,
    total_deductions DECIMAL(12,2) NOT NULL DEFAULT 0,
    net_salary DECIMAL(12,2) NOT NULL,
    payroll_status ENUM('Draft','Processed','Approved','Paid') NOT NULL DEFAULT 'Draft',
    processed_by_employee_id CHAR(36) NULL,
    processed_at DATETIME NULL,
    approved_by_employee_id CHAR(36) NULL,
    approved_at DATETIME NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT uk_employee_payroll
        UNIQUE (
            employee_id,
            payroll_month,
            payroll_year
        ),

    CONSTRAINT fk_payroll_employee
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_payroll_salary_structure
        FOREIGN KEY (salary_structure_id)
        REFERENCES salary_structures(salary_structure_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_payroll_processed_by
        FOREIGN KEY (processed_by_employee_id)
        REFERENCES employees(employee_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    CONSTRAINT fk_payroll_approved_by
        FOREIGN KEY (approved_by_employee_id)
        REFERENCES employees(employee_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE

);

CREATE INDEX idx_payroll_status
ON payrolls(payroll_status);

CREATE INDEX idx_payroll_processed_by
ON payrolls(processed_by_employee_id);

CREATE INDEX idx_payroll_approved_by
ON payrolls(approved_by_employee_id);