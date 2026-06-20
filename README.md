# Employee Management System (EMS) Database Schema

## Overview

This repository contains the complete database schema design for an Employee Management System (EMS) developed as part of the Elexoplus Full Stack Development internship project.

The database is designed using MySQL and follows a modular architecture where each business domain is separated into its own SQL module. The schema covers authentication, employee management, leave management, payroll processing, sales executive tracking, and area sales management.

---

## Database Information

* Database Name: `employee_management_system`
* Database Engine: MySQL
* Primary Key Strategy: UUID (CHAR(36))
* Foreign Key Constraints: Implemented
* Modular SQL Structure: Yes
* Sample Data Records: Included in JSON format

---

## Project Structure

```text
Harshit-Goel/
└── Database-Schema/
    └── SQL-Scripts/
        │
        ├── 01_database.sql
        │
        ├── address_record.json
        ├── department_record.json
        ├── designation_record.json
        ├── employee_record.json
        ├── leave_approval_record.json
        ├── leave_request_record.json
        ├── leave_type_record.json
        ├── roles_record.json
        ├── Tables_Record.json
        ├── target_type_record.json
        ├── territories_record.json
        ├── user_record.json
        ├── user_role_record.json
        │
        ├── ASM-Module/
        │   ├── 01_territories.sql
        │   ├── 02_territory_assignments.sql
        │   ├── 03_targets.sql
        │   └── 04_target_types.sql
        │
        ├── Authentication-Module/
        │   ├── 01_users.sql
        │   ├── 02_roles.sql
        │   ├── 03_user_roles.sql
        │   └── 04_sessions.sql
        │
        ├── HR-Module/
        │   ├── 01_departments.sql
        │   ├── 02_designations.sql
        │   ├── 03_department_designations.sql
        │   ├── 04_employees.sql
        │   ├── 05_employee_addresses.sql
        │   ├── 06_employee_documents.sql
        │   ├── 07_employee_transfers.sql
        │   └── 08_employee_exits.sql
        │
        ├── Leave-Module/
        │   ├── 01_leave_types.sql
        │   ├── 02_leave_requests.sql
        │   ├── 03_leave_balances.sql
        │   └── 04_leave_approvals.sql
        │
        ├── Payroll-Module/
        │   ├── 01_salary_structures.sql
        │   ├── 02_payrolls.sql
        │   ├── 03_incentives.sql
        │   ├── 04_deductions.sql
        │   └── 05_payslips.sql
        │
        └── Sales-Executive-Tracking-Module/
            ├── 01_attendance.sql
            ├── 02_clients.sql
            ├── 03_client_visits.sql
            ├── 04_leads.sql
            ├── 05_lead_status_history.sql
            ├── 06_expenses.sql
            └── 07_daily_activity_reports.sql
```

## Modules Included

### Authentication Module

Handles system access and authorization.

Tables:

* users
* roles
* user_roles
* sessions

---

### HR Module

Manages employee master records and organizational structure.

Tables:

* departments
* designations
* department_designations
* employees
* employee_addresses
* employee_documents
* employee_transfers
* employee_exits

---

### Leave Module

Handles leave requests and approvals.

Tables:

* leave_types
* leave_requests
* leave_balances
* leave_approvals

---

### Payroll Module

Manages payroll calculations and salary processing.

Tables:

* salary_structures
* payrolls
* incentives
* deductions
* payslips

---

### Sales Executive Tracking Module

Tracks field sales activities and reporting.

Tables:

* attendance
* clients
* client_visits
* leads
* lead_status_history
* expenses
* daily_activity_reports

---

### ASM Module

Supports Area Sales Manager operations.

Tables:

* territories
* territory_assignments
* targets
* target_types

---

## Sample Data

Sample records have been exported and included in JSON format for testing and demonstration purposes.

Available JSON Files:

* user_record.json
* roles_record.json
* user_role_record.json
* department_record.json
* designation_record.json
* employee_record.json
* address_record.json
* leave_type_record.json
* leave_request_record.json
* leave_approval_record.json
* territories_record.json
* target_type_record.json
* Tables_Record.json

---

## Database Features

* UUID based primary keys
* Foreign key relationships
* Modular database design
* Normalized schema structure
* Role based access support
* Employee lifecycle management
* Leave approval workflow
* Payroll processing support
* Sales activity tracking
* Territory and target management

---

## Total Tables

| Module                   | Tables |
| ------------------------ | ------ |
| Authentication           | 4      |
| HR                       | 8      |
| Leave                    | 4      |
| Payroll                  | 5      |
| Sales Executive Tracking | 7      |
| ASM                      | 4      |
| **Total**                | **32** |

---

## Author

**Harshit Goel**

Elexoplus Full Stack Development Internship Project

GitHub: https://github.com/harshitgoel006
