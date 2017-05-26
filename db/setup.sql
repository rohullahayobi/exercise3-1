CREATE TABLE projects(
   id SERIAL UNIQUE PRIMARY KEY NOT NULL,
   creator_id INT,
   category TEXT,
   title TEXT,
   description TEXT,
   project_start DATE,
   project_end DATE,
   funding_goal INT,
   funding_start DATE,
   funding_end DATE
);
CREATE TABLE creators(
   id SERIAL UNIQUE PRIMARY KEY NOT NULL,
   name TEXT
);
CREATE TABLE backers(
   id SERIAL UNIQUE PRIMARY KEY NOT NULL,
   balance INT,
   name TEXT
);
CREATE TABLE investments(
   project_id INT,
   backer_id INT,
   amount INT
);
