USE employee_management_system;

CREATE TABLE lead_status_history (

    status_history_id CHAR(36) PRIMARY KEY,
    lead_id CHAR(36) NOT NULL,
    old_status ENUM('New','Contacted','Qualified','Converted','Lost') NOT NULL,
    new_status ENUM('New','Contacted','Qualified','Converted','Lost') NOT NULL,
    changed_by_employee_id CHAR(36) NOT NULL,
    remarks TEXT,
    changed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_history_lead
        FOREIGN KEY (lead_id)
        REFERENCES leads(lead_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    CONSTRAINT fk_history_employee
        FOREIGN KEY (changed_by_employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);