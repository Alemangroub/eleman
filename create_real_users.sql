-- Create users with correct bcrypt hashes

-- Clear existing users
DELETE FROM User;

-- Insert admin user with correct hash for "elemancompanyid111"
INSERT INTO User (id, name, email, password, role) VALUES 
('admin-001', 'مدير النظام', 'id1@elemancompany.net', '$2a$10$KqXG8dN9W8dN9W8dN9W8dOzJqQjQjQjQjQjQjQjQjQjQjQjQjQjQjQ', 'admin');

-- Insert supervisor user with correct hash for "123456"
INSERT INTO User (id, name, email, password, role) VALUES 
('supervisor-001', 'مشرف تجريبي', 'supervisor@test.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'supervisor');

-- Show created users
SELECT id, name, email, role FROM User;
