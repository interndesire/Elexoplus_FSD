USE employee_management_system;

CREATE TABLE client_visits (

    visit_id CHAR(36) PRIMARY KEY,
    employee_id CHAR(36) NOT NULL,
    client_id CHAR(36) NOT NULL,
    visit_date DATE NOT NULL,
    purpose VARCHAR(255) NOT NULL,
    discussion_summary TEXT,
    outcome TEXT,
    next_followup_date DATE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_visit_employee
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_visit_client
        FOREIGN KEY (client_id)
        REFERENCES clients(client_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);

CREATE INDEX idx_visit_employee
ON client_visits(employee_id);

CREATE INDEX idx_visit_client
ON client_visits(client_id);

CREATE INDEX idx_visit_date
ON client_visits(visit_date);