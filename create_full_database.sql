-- Create complete database structure for XAMPP
CREATE DATABASE IF NOT EXISTS eleman CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE eleman;

-- Users table
CREATE TABLE IF NOT EXISTS User (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'supervisor') NOT NULL DEFAULT 'supervisor',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE IF NOT EXISTS Project (
    id VARCHAR(36) PRIMARY KEY,
    projectName VARCHAR(255) NOT NULL,
    projectAddress TEXT,
    archived BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ProjectSupervisors table (many-to-many relationship)
CREATE TABLE IF NOT EXISTS ProjectSupervisor (
    id VARCHAR(36) PRIMARY KEY,
    projectId VARCHAR(36) NOT NULL,
    userId VARCHAR(36) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (projectId) REFERENCES Project(id) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES User(id) ON DELETE CASCADE
);

-- Customers table
CREATE TABLE IF NOT EXISTS Customer (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Units table
CREATE TABLE IF NOT EXISTS Unit (
    id VARCHAR(36) PRIMARY KEY,
    projectId VARCHAR(36) NOT NULL,
    customerId VARCHAR(36) NOT NULL,
    unitLocation VARCHAR(255),
    unitType VARCHAR(100),
    totalPrice DECIMAL(10,2),
    downPayment DECIMAL(10,2),
    remainingAmount DECIMAL(10,2),
    status ENUM('available', 'sold', 'reserved') DEFAULT 'available',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (projectId) REFERENCES Project(id) ON DELETE CASCADE,
    FOREIGN KEY (customerId) REFERENCES Customer(id) ON DELETE CASCADE
);

-- Installments table
CREATE TABLE IF NOT EXISTS Installment (
    id VARCHAR(36) PRIMARY KEY,
    unitId VARCHAR(36) NOT NULL,
    installmentAmount DECIMAL(10,2) NOT NULL,
    dueDate DATE NOT NULL,
    paidAmount DECIMAL(10,2) DEFAULT 0,
    status ENUM('pending', 'paid', 'overdue') DEFAULT 'pending',
    paymentDate TIMESTAMP NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (unitId) REFERENCES Unit(id) ON DELETE CASCADE
);

-- DailyReports table
CREATE TABLE IF NOT EXISTS DailyReport (
    id VARCHAR(36) PRIMARY KEY,
    projectId VARCHAR(36) NOT NULL,
    supervisorId VARCHAR(36) NOT NULL,
    reportDate DATE NOT NULL,
    workDescription TEXT,
    workersCount INT DEFAULT 0,
    notes TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (projectId) REFERENCES Project(id) ON DELETE CASCADE,
    FOREIGN KEY (supervisorId) REFERENCES User(id) ON DELETE CASCADE
);

-- DailyExpenses table
CREATE TABLE IF NOT EXISTS DailyExpense (
    id VARCHAR(36) PRIMARY KEY,
    projectId VARCHAR(36) NOT NULL,
    expenseDate DATE NOT NULL,
    description VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(100),
    receiptNumber VARCHAR(100),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (projectId) REFERENCES Project(id) ON DELETE CASCADE
);

-- Items table
CREATE TABLE IF NOT EXISTS Item (
    id VARCHAR(36) PRIMARY KEY,
    projectId VARCHAR(36) NOT NULL,
    itemName VARCHAR(255) NOT NULL,
    quantity INT DEFAULT 0,
    unit VARCHAR(50),
    unitPrice DECIMAL(10,2),
    totalPrice DECIMAL(10,2),
    status ENUM('available', 'used', 'damaged') DEFAULT 'available',
    notes TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (projectId) REFERENCES Project(id) ON DELETE CASCADE
);

-- Insert admin user (password: elemancompanyid111)
INSERT INTO User (id, name, email, password, role) VALUES 
('admin-001', 'مدير النظام', 'id1@elemancompany.net', '$2a$10$rOzJqQjQjQjQjQjQjQjQjOzJqQjQjQjQjQjQjQjQjQjQjQjQjQjQjQjQ', 'admin')
ON DUPLICATE KEY UPDATE name = VALUES(name), password = VALUES(password);

-- Insert supervisor user (password: 123456)
INSERT INTO User (id, name, email, password, role) VALUES 
('supervisor-001', 'مشرف تجريبي', 'supervisor@test.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'supervisor')
ON DUPLICATE KEY UPDATE name = VALUES(name), password = VALUES(password);

-- Insert sample project
INSERT INTO Project (id, projectName, projectAddress) VALUES 
('project-001', 'مشروع سكني تجريبي', 'شارع الملك فهد، الرياض')
ON DUPLICATE KEY UPDATE projectName = VALUES(projectName);

-- Assign supervisor to project
INSERT INTO ProjectSupervisor (id, projectId, userId) VALUES 
('ps-001', 'project-001', 'supervisor-001')
ON DUPLICATE KEY UPDATE projectId = VALUES(projectId);

-- Insert sample customer
INSERT INTO Customer (id, name, phone, address) VALUES 
('customer-001', 'أحمد محمد', '0501234567', 'الرياض، حي النخيل')
ON DUPLICATE KEY UPDATE name = VALUES(name);

-- Insert sample unit
INSERT INTO Unit (id, projectId, customerId, unitLocation, unitType, totalPrice, downPayment, remainingAmount) VALUES 
('unit-001', 'project-001', 'customer-001', 'الدور الأول، شقة 101', 'شقة سكنية', 500000, 150000, 350000)
ON DUPLICATE KEY UPDATE unitLocation = VALUES(unitLocation);

-- Insert sample installments
INSERT INTO Installment (id, unitId, installmentAmount, dueDate, status) VALUES 
('installment-001', 'unit-001', 25000, '2024-01-01', 'pending'),
('installment-002', 'unit-001', 25000, '2024-02-01', 'pending'),
('installment-003', 'unit-001', 25000, '2024-03-01', 'pending')
ON DUPLICATE KEY UPDATE installmentAmount = VALUES(installmentAmount);

-- Insert sample items
INSERT INTO Item (id, projectId, itemName, quantity, unit, unitPrice, totalPrice) VALUES 
('item-001', 'project-001', 'أسمنت', 100, 'طن', 300, 30000),
('item-002', 'project-001', 'طوب', 5000, 'قطعة', 2, 10000),
('item-003', 'project-001', 'حديد', 50, 'طن', 5000, 250000)
ON DUPLICATE KEY UPDATE quantity = VALUES(quantity);

-- Insert sample daily report
INSERT INTO DailyReport (id, projectId, supervisorId, reportDate, workDescription, workersCount) VALUES 
('report-001', 'project-001', 'supervisor-001', '2024-01-15', 'عملية صب الخرسانة للأساسات', 15)
ON DUPLICATE KEY UPDATE workDescription = VALUES(workDescription);

-- Insert sample daily expenses
INSERT INTO DailyExpense (id, projectId, expenseDate, description, amount, category) VALUES 
('expense-001', 'project-001', '2024-01-15', 'شراء مواد بناء', 50000, 'مواد'),
('expense-002', 'project-001', '2024-01-16', 'أجور عمال', 15000, 'أجور')
ON DUPLICATE KEY UPDATE amount = VALUES(amount);

-- Show database summary
SELECT 'Database created successfully!' as message;
SELECT COUNT(*) as total_users FROM User;
SELECT COUNT(*) as total_projects FROM Project;
SELECT COUNT(*) as total_customers FROM Customer;
SELECT COUNT(*) as total_units FROM Unit;
SELECT COUNT(*) as total_installments FROM Installment;
