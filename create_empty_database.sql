-- Create empty database structure for XAMPP
CREATE DATABASE IF NOT EXISTS eleman CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE eleman;

-- Create users table (basic structure)
CREATE TABLE IF NOT EXISTS User (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'supervisor') NOT NULL DEFAULT 'supervisor',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert admin user
INSERT INTO User (id, name, email, password, role) VALUES 
('admin-id-123', 'مدير النظام', 'id1@elemancompany.net', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');

-- Insert supervisor user
INSERT INTO User (id, name, email, password, role) VALUES 
('supervisor-id-123', 'مشرف تجريبي', 'supervisor@test.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'supervisor');
