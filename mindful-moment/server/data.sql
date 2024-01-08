CREATE DATABASE mindful_moment;


CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    registration_date DATE
);


CREATE TABLE moodEntries (
    mood_id INT PRIMARY KEY,
    user_id INT,
    mood_value INT,
    entry_date DATE,
    additional_notes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE journalEntries (
    journal_id INT PRIMARY KEY,
    user_id INT,
    entry_text TEXT,
    entry_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE resources (
    resource_id INT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    url VARCHAR(255)
);


CREATE TABLE userProgress (
    progress_id INT PRIMARY KEY,
    user_id INT,
    activity_id INT,
    start_date DATE,
    target_date DATE,
    completion_status BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


CREATE TABLE userActivities (
    activity_id INT PRIMARY KEY,
    user_id INT,
    activity_name VARCHAR(255),
    activity_description TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


INSERT INTO journalEntries(journal_id,user_id, entry_text, entry_date) VALUES(0,0, 'first entry','2024-01-03')


INSERT INTO users( 
    user_id,
    username,
    email,
    password_hash,
    registration_date)
VALUES
(
    0, 
    'maggieTest', 
   'maggie@test.com', 
    'xyz', 
    '2024-01-03'
)