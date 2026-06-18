USE employee_management_system;

CREATE TABLE department_designations (
    department_id CHAR(36) NOT NULL,
    designation_id CHAR(36) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (department_id,designation_id),
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    FOREIGN KEY (designation_id)
        REFERENCES designations(designation_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE

);