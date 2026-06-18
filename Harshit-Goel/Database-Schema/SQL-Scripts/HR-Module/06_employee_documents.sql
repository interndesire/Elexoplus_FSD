USE employee_management_system;

CREATE TABLE employee_documents (

    document_id CHAR(36) PRIMARY KEY,
    employee_id CHAR(36) NOT NULL,
    document_type ENUM('Aadhaar','PAN','Resume','Offer Letter','Experience Letter','Other') NOT NULL,
    document_name VARCHAR(255) NOT NULL,
    document_url VARCHAR(500) NOT NULL,
    status ENUM('Active', 'Archived' ) NOT NULL DEFAULT 'Active',
    uploaded_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_employee_document
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE

);

CREATE INDEX idx_employee_document_employee_id
ON employee_documents(employee_id);
