Create database LLAM;

USE LLAM;

Create Table employee_master (
    employee_id VARCHAR(6) NOT NULL,
    employee_name VARCHAR(20),
    designation VARCHAR(25),
    department VARCHAR(25),
    gender CHAR(1),
    date_of_birth DATE,
    date_of_join DATE,
    PRIMARY KEY(employee_id)
);

Create Table user_data (
    email_id VARCHAR(20) NOT NULL,
    password VARCHAR(8) NOT NULL,
    employee_id VARCHAR(6) NOT NULL,
    isAdmin INT(1) NOT NULL,
    PRIMARY KEY(email_id),
    FOREIGN KEY (employee_id) REFERENCES employee_master(employee_id)
);



Create TAble item_master (
    item_id VARCHAR(6) NOT NULL,
    item_description VARCHAR(25),
    issue_status CHAR(1),
    item_make VARCHAR(25),
    item_catergory VARCHAR(20),
    item_valuation INT(6),
    PRIMARY KEY(item_id)
);


Create Table employee_issue_details (
    issue_id VARCHAR(6) NOT NULL,
    employee_id VARCHAR(6) NOT NULL,
    item_id VARCHAR(6),
    issue_date DATE,
    return_date DATE,
    PRIMARY KEY(issue_id),
    FOREIGN KEY(employee_id) REFERENCES employee_master(employee_id),
    FOREIGN KEY(item_id) REFERENCES item_master(item_id)
);

Create TAble loan_card_master (
    loan_id VARCHAR(6) NOT NULL,
    loan_type VARCHAR(15),
    duration_in_year INT(2),
    PRIMARY KEY(loan_id)
);

Create Table employee_card_details (
    employee_id VARCHAR(6) NOT NULL,
    loan_id VARCHAR(6) NOT NULL,
    card_issue_date DATE,
    FOREIGN KEY(employee_id) REFERENCES employee_master(employee_id),
    FOREIGN KEY(loan_id) REFERENCES loan_card_master(loan_id),
    PRIMARY KEY(employee_id, loan_id)

);

CREATE TABLE users (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    is_enabled BOOLEAN NOT NULL DEFAULT False,
    is_admin INT NOT NULL DEFAULT 0,
    otp INT
);

Show Tables;
