USE employee_management_system;

CREATE TABLE leads (

    lead_id CHAR(36) PRIMARY KEY,
    employee_id CHAR(36) NOT NULL,
    lead_name VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(255),
    company_name VARCHAR(255),
    lead_source ENUM('Reference','Website','Social Media','Walk-In','Cold Calling','Other') NOT NULL,
    lead_priority ENUM('Low','Medium','High') NOT NULL DEFAULT 'Medium',
    current_status ENUM('New','Contacted','Qualified','Converted','Lost') NOT NULL DEFAULT 'New',
    expected_value DECIMAL(12,2),
    remarks TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_lead_employee
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);

CREATE INDEX idx_lead_employee
ON leads(employee_id);

CREATE INDEX idx_lead_status
ON leads(current_status);

CREATE INDEX idx_lead_source
ON leads(lead_source);