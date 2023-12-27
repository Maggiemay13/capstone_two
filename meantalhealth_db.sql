-- Create Users table
CREATE TABLE Users (
    user_id INT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    registration_date DATE
);

-- Create MoodEntries table
CREATE TABLE MoodEntries (
    mood_id INT PRIMARY KEY,
    user_id INT,
    mood_value INT,
    entry_date DATE,
    additional_notes TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Create JournalEntries table
CREATE TABLE JournalEntries (
    journal_id INT PRIMARY KEY,
    user_id INT,
    entry_text TEXT,
    entry_date DATE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Create Resources table
CREATE TABLE Resources (
    resource_id INT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    url VARCHAR(255)
);

-- Create UserProgress table
CREATE TABLE UserProgress (
    progress_id INT PRIMARY KEY,
    user_id INT,
    goal_description TEXT,
    start_date DATE,
    target_date DATE,
    completion_status BOOLEAN,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Create UserActivities table
CREATE TABLE Goals (
    goal_id INT PRIMARY KEY,
    goal_name VARCHAR(255),
    goal_description TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
