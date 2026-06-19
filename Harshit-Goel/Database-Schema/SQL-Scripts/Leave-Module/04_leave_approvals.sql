USE employee_management_system;

CREATE TABLE leave_approvals (

    approval_id CHAR(36) PRIMARY KEY,
    leave_request_id CHAR(36) NOT NULL,
    approver_employee_id CHAR(36) NOT NULL,
    approval_level ENUM('ASM','HR') NOT NULL,
    decision ENUM('Pending','Approved','Rejected') NOT NULL DEFAULT 'Pending',
    remarks TEXT NULL,
    action_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_leave_approval_request
        FOREIGN KEY (leave_request_id)
        REFERENCES leave_requests(leave_request_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_leave_approval_employee
        FOREIGN KEY (approver_employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);

CREATE INDEX idx_leave_approval_request
ON leave_approvals(leave_request_id);

CREATE INDEX idx_leave_approval_approver
ON leave_approvals(approver_employee_id);

CREATE INDEX idx_leave_approval_level
ON leave_approvals(approval_level);