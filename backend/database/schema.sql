-- Create Database Flora
CREATE DATABASE flora;

-- Use Database
USE flora;

-- Plants Table, List Of Plants
CREATE TABLE flora.plants (
    name VARCHAR(300) PRIMARY KEY,
    description VARCHAR(500),
    category VARCHAR(300),
    climate VARCHAR(300),
    imagePath VARCHAR(300),
    water VARCHAR(300),
    sunlight VARCHAR(300),
    soil VARCHAR(300)
);

-- Location Table, List Of Locations
CREATE TABLE flora.location (
    cityName VARCHAR(300) PRIMARY KEY,
    tempLow FLOAT,
    tempHigh FLOAT,
    lastUpdate DATETIME,
    weatherType VARCHAR(300),
    nearestStore VARCHAR(300)
);

-- User Table, Each User Has ___
CREATE TABLE flora.users (
    username VARCHAR(300) PRIMARY KEY,
    password VARCHAR(300) NOT NULL,
    birthday DATE,
    location VARCHAR(300),
    registerTag BOOLEAN,
    privateTag BOOLEAN,
    adminTag BOOLEAN,
    imagePath VARCHAR(300),
    backgroundPath VARCHAR(500),
    FOREIGN KEY (location) REFERENCES location(cityName)
);

-- User Owned Plants Table, Each User Has Specific Owned Plants
CREATE TABLE flora.ownedPlants (
    id INTEGER PRIMARY KEY auto_increment,
    owner VARCHAR(300) NOT NULL,
    name VARCHAR(300) NOT NULL,
    privateTag BOOLEAN,
    lastWatered DATETIME,
    insideTag BOOLEAN,
    favoriteTag BOOLEAN,
    currentTasks VARCHAR(300),
    specificPhoto VARCHAR(300),
    FOREIGN KEY (owner) REFERENCES users(username),
    FOREIGN KEY (name) REFERENCES plants(name)
);

-- User Wish Ticket Table, Each User Wants New Plants
CREATE TABLE flora.wishTicket (
    ticketId INTEGER PRIMARY KEY auto_increment,
    username VARCHAR(300) NOT NULL,
    plant VARCHAR(300) NOT NULL,
    FOREIGN KEY (username) REFERENCES users(username),
    FOREIGN KEY (plant) REFERENCES plants(name)
);

-- Forum Table, List Of Forums
CREATE TABLE flora.forum (
    topic VARCHAR(300) PRIMARY KEY,
    description VARCHAR(300) NOT NULL
);

-- Post Table, List Of Posts In Forum
CREATE TABLE flora.plantPost (
    postId INTEGER PRIMARY KEY auto_increment,
    topic VARCHAR(300) NOT NULL,
    poster VARCHAR(300) NOT NULL,
    title VARCHAR(300) NOT NULL,
    post VARCHAR(300) NOT NULL,
    privateTag BOOLEAN NOT NULL,
    likeCount INTEGER NOT NULL,
    FOREIGN KEY (topic) REFERENCES forum(topic),
    FOREIGN KEY (poster) REFERENCES users(username)
);

-- Comments Table, List Of Comments In Post In Forum
CREATE TABLE flora.comment (
    commentId INTEGER PRIMARY KEY auto_increment,
    postId INTEGER NOT NULL,
    poster VARCHAR(300) NOT NULL,
    post VARCHAR(300) NOT NULL,
    privateTag BOOLEAN NOT NULL,
    likeCount INTEGER NOT NULL,
    FOREIGN KEY (postId) REFERENCES plantPost(postId),
    FOREIGN KEY (poster) REFERENCES users(username)
);
