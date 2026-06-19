USE employee_management_system;

CREATE TABLE salary_structures (

    salary_structure_id CHAR(36) PRIMARY KEY,
    employee_id CHAR(36) NOT NULL,
    basic_salary DECIMAL(12,2) NOT NULL,
    hra DECIMAL(12,2) NOT NULL DEFAULT 0,
    special_allowance DECIMAL(12,2) NOT NULL DEFAULT 0,
    other_allowance DECIMAL(12,2) NOT NULL DEFAULT 0,
    effective_from DATE NOT NULL,
    effective_to DATE NULL,
    status ENUM('Active','Inactive') NOT NULL DEFAULT 'Active',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_salary_structure_employee
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);

CREATE INDEX idx_salary_employee
ON salary_structures(employee_id);

CREATE INDEX idx_salary_employee_status
ON salary_structures(employee_id, status);