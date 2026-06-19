USE employee_management_system;

CREATE TABLE payslips (

    payslip_id CHAR(36) PRIMARY KEY,
    payroll_id CHAR(36) NOT NULL,
    employee_id CHAR(36) NOT NULL,
    payslip_number VARCHAR(50) NOT NULL UNIQUE,
    pdf_url VARCHAR(500) NOT NULL,
    generated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT uk_payslip_payroll
        UNIQUE(payroll_id),
    CONSTRAINT fk_payslip_payroll
        FOREIGN KEY (payroll_id)
        REFERENCES payrolls(payroll_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    CONSTRAINT fk_payslip_employee
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);

CREATE INDEX idx_payslip_employee
ON payslips(employee_id);