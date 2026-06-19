USE employee_management_system;

CREATE TABLE daily_activity_reports (

    report_id CHAR(36) PRIMARY KEY,

    employee_id CHAR(36) NOT NULL,

    report_date DATE NOT NULL,

    total_client_visits INT NOT NULL DEFAULT 0,

    total_leads_generated INT NOT NULL DEFAULT 0,

    total_followups INT NOT NULL DEFAULT 0,

    activity_summary TEXT NOT NULL,

    challenges_faced TEXT,

    plan_for_next_day TEXT,

    review_status ENUM(
        'Pending',
        'Reviewed'
    ) NOT NULL DEFAULT 'Pending',

    reviewed_by_employee_id CHAR(36) NULL,

    reviewed_at DATETIME NULL,

    asm_feedback TEXT,

    created_at DATETIME NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

    updated_at DATETIME NOT NULL
        DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_daily_report_employee
        FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    CONSTRAINT fk_daily_report_reviewer
        FOREIGN KEY (reviewed_by_employee_id)
        REFERENCES employees(employee_id)
        ON DELETE SET NULL
        ON UPDATE CASCADE,

    CONSTRAINT uk_employee_report_date
        UNIQUE(employee_id, report_date)

);

CREATE INDEX idx_report_review_status
ON daily_activity_reports(review_status);

CREATE INDEX idx_report_reviewer
ON daily_activity_reports(reviewed_by_employee_id);

CREATE INDEX idx_report_date
ON daily_activity_reports(report_date);