USE employee_management_system;

CREATE TABLE leave_requests (

    leave_request_id CHAR(36) PRIMARY KEY,
    employee_id CHAR(36) NOT NULL,
    leave_type_id CHAR(36) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    reason TEXT NOT NULL,
    status ENUM('Pending','Under Review','Approved','Rejected','Cancelled') NOT NULL DEFAULT 'Pending',
    applied_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_leave_request_employee
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_leave_request_leave_type
        FOREIGN KEY (leave_type_id)
        REFERENCES leave_types(leave_type_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);

CREATE INDEX idx_leave_request_employee
ON leave_requests(employee_id);

CREATE INDEX idx_leave_request_status
ON leave_requests(status);

CREATE INDEX idx_leave_request_leave_type
ON leave_requests(leave_type_id);

CREATE INDEX idx_leave_request_dates
ON leave_requests(start_date, end_date);