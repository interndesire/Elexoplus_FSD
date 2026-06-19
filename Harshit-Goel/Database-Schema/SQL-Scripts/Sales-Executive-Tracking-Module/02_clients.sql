USE employee_management_system;

CREATE TABLE clients (

    client_id CHAR(36) PRIMARY KEY,
    lead_id CHAR(36) NULL,
    client_name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255),
    phone_number VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(255),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    pincode VARCHAR(20),
    status ENUM('Active','Inactive' ) NOT NULL DEFAULT 'Active',
    assigned_employee_id CHAR(36) NULL,
    remarks TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_client_lead
        FOREIGN KEY (lead_id)
        REFERENCES leads(lead_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    CONSTRAINT fk_client_employee
        FOREIGN KEY (assigned_employee_id)
        REFERENCES employees(employee_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE

);

CREATE INDEX idx_client_employee
ON clients(assigned_employee_id);