USE employee_management_system;

CREATE TABLE expenses (

    expense_id CHAR(36) PRIMARY KEY,
    employee_id CHAR(36) NOT NULL,
    expense_date DATE NOT NULL,
    expense_category ENUM('Travel','Food','Miscellaneous') NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    description TEXT,
    receipt_url VARCHAR(500),
    approval_status ENUM('Pending','Approved','Rejected') NOT NULL DEFAULT 'Pending',
    approved_by_employee_id CHAR(36) NULL,
    approved_at DATETIME NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_expense_employee
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_expense_approved_by
        FOREIGN KEY (approved_by_employee_id)
        REFERENCES employees(employee_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE

);

CREATE INDEX idx_expense_employee
ON expenses(employee_id);

CREATE INDEX idx_expense_date
ON expenses(expense_date);

CREATE INDEX idx_expense_status
ON expenses(approval_status);