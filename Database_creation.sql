-- prepares a MySQL server for the project

CREATE DATABASE IF NOT EXISTS PGIS_database;
-- Create administrator
CREATE USER IF NOT EXISTS 'admin'@'localhost' IDENTIFIED BY 'admin';
GRANT ALL PRIVILEGES ON `PGIS_database`.* TO 'admin'@'localhost';
GRANT SELECT ON `performance_schema`.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;
