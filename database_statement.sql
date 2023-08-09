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
    employee_id VARCHAR(6),
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
    employee_id VARCHAR(6),
    loan_id VARCHAR(6),
    card_issue_date DATE,
    FOREIGN KEY(employee_id) REFERENCES employee_master(employee_id),
    FOREIGN KEY(loan_id) REFERENCES loan_card_master(loan_id)

);

Show Tables;