USE employee_management_system;

CREATE TABLE employees (

    employee_id CHAR(36) PRIMARY KEY,
    employee_code VARCHAR(20) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL UNIQUE,
    date_of_birth DATE,
    gender ENUM(
        'Male',
        'Female',
        'Other'
    ) NOT NULL,
    profile_image_url VARCHAR(500),
    department_id CHAR(36) NOT NULL,
    designation_id CHAR(36) NOT NULL,
    date_of_joining DATE NOT NULL,
    employment_type ENUM(
        'Full Time',
        'Part Time',
        'Intern',
        'Contract',
        'Consultant'
    ) NOT NULL,
    employment_status ENUM(
        'Active',
        'Inactive',
        'On Leave',
        'Terminated'
    ) NOT NULL DEFAULT 'Active',
    work_location ENUM(
        'Office',
        'Remote',
        'Hybrid'
    ) NOT NULL DEFAULT 'Office',
    reporting_manager_id CHAR(36),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_employee_department
        FOREIGN KEY (department_id)
        REFERENCES departments(department_id),
    CONSTRAINT fk_employee_designation
        FOREIGN KEY (designation_id)
        REFERENCES designations(designation_id),
    CONSTRAINT fk_reporting_manager       
        FOREIGN KEY (reporting_manager_id)
        REFERENCES employees(employee_id)

);