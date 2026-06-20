-- INSERT INTO departments
-- (department_id, department_name, description)
-- VALUES
-- (UUID(),'Sales','Sales Department'),
-- (UUID(),'Human Resources','Human Resource Department'),
-- (UUID(),'Finance','Finance Department'),
-- (UUID(),'Operations','Operations Department');


-- INSERT INTO designations
-- (designation_id, designation_name, description)
-- VALUES
-- (UUID(),'Area Sales Manager','Manages sales executives'),
-- (UUID(),'Sales Executive','Field sales representative'),
-- (UUID(),'HR Executive','Handles HR operations'),
-- (UUID(),'Accountant','Handles accounts and payroll');




-- INSERT INTO roles
-- (role_id, role_name, description)
-- VALUES
-- (UUID(),'Admin','System Administrator'),
-- (UUID(),'HR','Human Resource Manager'),
-- (UUID(),'ASM','Area Sales Manager'),
-- (UUID(),'Sales Executive','Sales Executive User');


-- INSERT INTO leave_types
-- (
-- leave_type_id,
-- leave_type_name,
-- description,
-- max_allowed_days,
-- is_paid
-- )
-- VALUES
-- (
-- UUID(),
-- 'Casual Leave',
-- 'Personal short leave',
-- 10,
-- TRUE
-- ),
-- (
-- UUID(),
-- 'Sick Leave',
-- 'Medical leave',
-- 12,
-- TRUE
-- ),
-- (
-- UUID(),
-- 'Earned Leave',
-- 'Accrued annual leave',
-- 18,
-- TRUE
-- ),
-- (
-- UUID(),
-- 'Loss Of Pay',
-- 'Unpaid leave',
-- 365,
-- FALSE
-- );



-- INSERT INTO target_types
-- (
-- target_type_id,
-- target_type_name,
-- description
-- )
-- VALUES
-- (
-- UUID(),
-- 'Sales Revenue',
-- 'Revenue based target'
-- ),
-- (
-- UUID(),
-- 'Client Acquisition',
-- 'New client onboarding target'
-- ),
-- (
-- UUID(),
-- 'Lead Generation',
-- 'Lead generation target'
-- );



-- INSERT INTO territories
-- (
-- territory_id,
-- territory_name,
-- description
-- )
-- VALUES
-- (
-- UUID(),
-- 'North Delhi',
-- 'North Delhi Territory'
-- ),
-- (
-- UUID(),
-- 'South Delhi',
-- 'South Delhi Territory'
-- ),
-- (
-- UUID(),
-- 'Gurugram',
-- 'Gurugram Territory'
-- ),
-- (
-- UUID(),
-- 'Noida',
-- 'Noida Territory'
-- );


-- SELECT * FROM departments;
-- SELECT * FROM designations;
-- SELECT * FROM roles;
-- SELECT * FROM leave_types;
-- SELECT * FROM target_types;
-- SELECT * FROM territories;

-- INSERT INTO department_designations
-- (department_id, designation_id)
-- VALUES

-- (
-- '4221a065-6cd3-11f1-adb9-005056c00001',
-- '4cbeb787-6cd3-11f1-adb9-005056c00001'
-- ),
-- (
-- '4221a065-6cd3-11f1-adb9-005056c00001',
-- '4cbfcd92-6cd3-11f1-adb9-005056c00001'
-- ),

-- (
-- '422442d5-6cd3-11f1-adb9-005056c00001',
-- '4cbfd331-6cd3-11f1-adb9-005056c00001'
-- ),

-- (
-- '42245cd3-6cd3-11f1-adb9-005056c00001',
-- '4cbfd4c8-6cd3-11f1-adb9-005056c00001'
-- );


-- INSERT INTO employees
-- (
-- employee_id,
-- employee_code,
-- first_name,
-- last_name,
-- email,
-- phone,
-- date_of_birth,
-- gender,
-- department_id,
-- designation_id,
-- date_of_joining,
-- employment_type,
-- employment_status,
-- work_location,
-- reporting_manager_id
-- )
-- VALUES

-- (
-- UUID(),
-- 'EMP001',
-- 'Rahul',
-- 'Sharma',
-- 'rahul.sharma@ems.com',
-- '9876543210',
-- '1990-05-12',
-- 'Male',
-- '4221a065-6cd3-11f1-adb9-005056c00001',
-- '4cbeb787-6cd3-11f1-adb9-005056c00001',
-- '2023-01-15',
-- 'Full Time',
-- 'Active',
-- 'Office',
-- NULL
-- ),

-- (
-- UUID(),
-- 'EMP002',
-- 'Neha',
-- 'Singh',
-- 'neha.singh@ems.com',
-- '9876543211',
-- '1997-08-21',
-- 'Female',
-- '4221a065-6cd3-11f1-adb9-005056c00001',
-- '4cbfcd92-6cd3-11f1-adb9-005056c00001',
-- '2024-02-10',
-- 'Full Time',
-- 'Active',
-- 'Office',
-- NULL
-- ),

-- (
-- UUID(),
-- 'EMP003',
-- 'Amit',
-- 'Gupta',
-- 'amit.gupta@ems.com',
-- '9876543212',
-- '1995-11-04',
-- 'Male',
-- '4221a065-6cd3-11f1-adb9-005056c00001',
-- '4cbfcd92-6cd3-11f1-adb9-005056c00001',
-- '2024-03-01',
-- 'Full Time',
-- 'Active',
-- 'Hybrid',
-- NULL
-- ),

-- (
-- UUID(),
-- 'EMP004',
-- 'Priya',
-- 'Verma',
-- 'priya.verma@ems.com',
-- '9876543213',
-- '1994-09-18',
-- 'Female',
-- '422442d5-6cd3-11f1-adb9-005056c00001',
-- '4cbfd331-6cd3-11f1-adb9-005056c00001',
-- '2023-06-20',
-- 'Full Time',
-- 'Active',
-- 'Office',
-- NULL
-- ),

-- (
-- UUID(),
-- 'EMP005',
-- 'Rohit',
-- 'Mehta',
-- 'rohit.mehta@ems.com',
-- '9876543214',
-- '1992-01-28',
-- 'Male',
-- '42245cd3-6cd3-11f1-adb9-005056c00001',
-- '4cbfd4c8-6cd3-11f1-adb9-005056c00001',
-- '2022-09-15',
-- 'Full Time',
-- 'Active',
-- 'Office',
-- NULL
-- ),

-- (
-- UUID(),
-- 'EMP006',
-- 'Karan',
-- 'Malhotra',
-- 'karan.malhotra@ems.com',
-- '9876543215',
-- '1998-04-30',
-- 'Male',
-- '4221a065-6cd3-11f1-adb9-005056c00001',
-- '4cbfcd92-6cd3-11f1-adb9-005056c00001',
-- '2024-05-05',
-- 'Full Time',
-- 'Active',
-- 'Hybrid',
-- NULL
-- );



-- SELECT employee_id, employee_code, first_name, last_name
-- FROM employees;



-- INSERT INTO employee_addresses
-- (
-- address_id,
-- employee_id,
-- address_line_1,
-- address_line_2,
-- city,
-- state,
-- country,
-- postal_code,
-- address_type
-- )
-- VALUES

-- (UUID(),'a5cfce07-6cd6-11f1-adb9-005056c00001','House 101','Sector 15','Gurugram','Haryana','India','122001','Current'),
-- (UUID(),'a5cfce07-6cd6-11f1-adb9-005056c00001','Village Rampur',NULL,'Panipat','Haryana','India','132103','Permanent'),

-- (UUID(),'a5d2e537-6cd6-11f1-adb9-005056c00001','Flat 204','DLF Phase 3','Gurugram','Haryana','India','122002','Current'),
-- (UUID(),'a5d2e537-6cd6-11f1-adb9-005056c00001','House 55',NULL,'Rohtak','Haryana','India','124001','Permanent'),

-- (UUID(),'a5d2f9c6-6cd6-11f1-adb9-005056c00001','Apartment 88','MG Road','Delhi','Delhi','India','110001','Current'),
-- (UUID(),'a5d2f9c6-6cd6-11f1-adb9-005056c00001','House 12',NULL,'Agra','Uttar Pradesh','India','282001','Permanent'),

-- (UUID(),'a5d2fda7-6cd6-11f1-adb9-005056c00001','Flat 401','Sector 21','Noida','Uttar Pradesh','India','201301','Current'),
-- (UUID(),'a5d2ff63-6cd6-11f1-adb9-005056c00001','House 7','Civil Lines','Jaipur','Rajasthan','India','302001','Current'),
-- (UUID(),'a5d30a6f-6cd6-11f1-adb9-005056c00001','Flat 505','Cyber City','Gurugram','Haryana','India','122018','Current');





-- SELECT
--     e.employee_code,
--     e.first_name,
--     e.last_name,
--     ea.address_type,
--     ea.address_line_1,
--     ea.city,
--     ea.state,
--     ea.country,
--     ea.postal_code
-- FROM employee_addresses ea
-- JOIN employees e
-- ON ea.employee_id = e.employee_id
-- ORDER BY e.employee_code;


-- INSERT INTO users
-- (
-- user_id,
-- employee_id,
-- username,
-- password_hash,
-- account_status
-- )
-- VALUES

-- (
-- UUID(),
-- 'a5cfce07-6cd6-11f1-adb9-005056c00001',
-- 'rahul.sharma',
-- 'hashed_password_001',
-- 'Active'
-- ),

-- (
-- UUID(),
-- 'a5d2e537-6cd6-11f1-adb9-005056c00001',
-- 'neha.singh',
-- 'hashed_password_002',
-- 'Active'
-- ),

-- (
-- UUID(),
-- 'a5d2f9c6-6cd6-11f1-adb9-005056c00001',
-- 'amit.gupta',
-- 'hashed_password_003',
-- 'Active'
-- ),

-- (
-- UUID(),
-- 'a5d2fda7-6cd6-11f1-adb9-005056c00001',
-- 'priya.verma',
-- 'hashed_password_004',
-- 'Active'
-- ),

-- (
-- UUID(),
-- 'a5d2ff63-6cd6-11f1-adb9-005056c00001',
-- 'rohit.mehta',
-- 'hashed_password_005',
-- 'Active'
-- ),

-- (
-- UUID(),
-- 'a5d30a6f-6cd6-11f1-adb9-005056c00001',
-- 'karan.malhotra',
-- 'hashed_password_006',
-- 'Active'
-- );


-- SELECT
-- user_id,
-- username,
-- employee_id
-- FROM users;




-- INSERT INTO leave_balances
-- (
-- leave_balance_id,
-- employee_id,
-- leave_type_id,
-- allocated_days,
-- used_days,
-- remaining_days
-- )
-- VALUES

-- (UUID(),'a5cfce07-6cd6-11f1-adb9-005056c00001','c75fae6a-6cd3-11f1-adb9-005056c00001',10,2,8),
-- (UUID(),'a5d2e537-6cd6-11f1-adb9-005056c00001','c75fae6a-6cd3-11f1-adb9-005056c00001',10,1,9),
-- (UUID(),'a5d2f9c6-6cd6-11f1-adb9-005056c00001','c75fd918-6cd3-11f1-adb9-005056c00001',12,3,9),
-- (UUID(),'a5d2fda7-6cd6-11f1-adb9-005056c00001','c75fdaec-6cd3-11f1-adb9-005056c00001',18,4,14),
-- (UUID(),'a5d2ff63-6cd6-11f1-adb9-005056c00001','c75fae6a-6cd3-11f1-adb9-005056c00001',10,0,10),
-- (UUID(),'a5d30a6f-6cd6-11f1-adb9-005056c00001','c75fd918-6cd3-11f1-adb9-005056c00001',12,1,11);


-- INSERT INTO leave_requests
-- (
-- leave_request_id,
-- employee_id,
-- leave_type_id,
-- start_date,
-- end_date,
-- reason,
-- status
-- )
-- VALUES

-- (
-- UUID(),
-- 'a5d2e537-6cd6-11f1-adb9-005056c00001',
-- 'c75fae6a-6cd3-11f1-adb9-005056c00001',
-- '2026-07-10',
-- '2026-07-12',
-- 'Family Function',
-- 'Approved'
-- ),

-- (
-- UUID(),
-- 'a5d2f9c6-6cd6-11f1-adb9-005056c00001',
-- 'c75fd918-6cd3-11f1-adb9-005056c00001',
-- '2026-07-15',
-- '2026-07-16',
-- 'Medical Checkup',
-- 'Pending'
-- ),

-- (
-- UUID(),
-- 'a5d30a6f-6cd6-11f1-adb9-005056c00001',
-- 'c75fae6a-6cd3-11f1-adb9-005056c00001',
-- '2026-08-01',
-- '2026-08-03',
-- 'Personal Work',
-- 'Under Review'
-- );


-- SELECT
-- leave_request_id,
-- employee_id,
-- status
-- FROM leave_requests;


-- INSERT INTO leave_approvals
-- (
-- approval_id,
-- leave_request_id,
-- approver_employee_id,
-- approval_level,
-- decision,
-- remarks
-- )
-- VALUES

-- (
-- UUID(),
-- '304cbcb7-6cd8-11f1-adb9-005056c00001',
-- 'a5cfce07-6cd6-11f1-adb9-005056c00001',
-- 'ASM',
-- 'Approved',
-- 'Approved by ASM'
-- ),

-- (
-- UUID(),
-- '304d276c-6cd8-11f1-adb9-005056c00001',
-- 'a5d2fda7-6cd6-11f1-adb9-005056c00001',
-- 'HR',
-- 'Pending',
-- 'Waiting for HR review'
-- ),

-- (
-- UUID(),
-- '304d2aa4-6cd8-11f1-adb9-005056c00001',
-- 'a5cfce07-6cd6-11f1-adb9-005056c00001',
-- 'ASM',
-- 'Pending',
-- 'Under ASM review'
-- );



-- INSERT INTO user_roles
-- (
-- user_role_id,
-- user_id,
-- role_id,
-- assigned_by
-- )
-- VALUES

-- (
-- UUID(),
-- 'a5fb2cfb-6cd7-11f1-adb9-005056c00001',
-- 'bb656e0e-6cd3-11f1-adb9-005056c00001',
-- 'a5fb2cfb-6cd7-11f1-adb9-005056c00001'
-- ),

-- (
-- UUID(),
-- 'a5fd8d91-6cd7-11f1-adb9-005056c00001',
-- 'bb656f53-6cd3-11f1-adb9-005056c00001',
-- 'a5fb2cfb-6cd7-11f1-adb9-005056c00001'
-- ),

-- (
-- UUID(),
-- 'a5fd9a7e-6cd7-11f1-adb9-005056c00001',
-- 'bb656f53-6cd3-11f1-adb9-005056c00001',
-- 'a5fb2cfb-6cd7-11f1-adb9-005056c00001'
-- ),

-- (
-- UUID(),
-- 'a5fd9b85-6cd7-11f1-adb9-005056c00001',
-- 'bb656a65-6cd3-11f1-adb9-005056c00001',
-- 'a5fb2cfb-6cd7-11f1-adb9-005056c00001'
-- ),

-- (
-- UUID(),
-- 'a5fd9c20-6cd7-11f1-adb9-005056c00001',
-- 'bb653afa-6cd3-11f1-adb9-005056c00001',
-- 'a5fb2cfb-6cd7-11f1-adb9-005056c00001'
-- ),

-- (
-- UUID(),
-- 'a5fd9cdd-6cd7-11f1-adb9-005056c00001',
-- 'bb656f53-6cd3-11f1-adb9-005056c00001',
-- 'a5fb2cfb-6cd7-11f1-adb9-005056c00001'
-- );





    -- SELECT * FROM leave_approvals;
    -- SELECT * FROM user_roles;
