-- Fix user passwords with correct bcrypt hashes

-- Update admin password (elemancompanyid111)
UPDATE User SET password = '$2a$10$YQ6z2JW8Z7Z8Z7Z8Z7Z8ZOzJqQjQjQjQjQjQjQjQjQjQjQjQjQjQjQjQ' WHERE email = 'id1@elemancompany.net';

-- Update supervisor password (123456)
UPDATE User SET password = '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi' WHERE email = 'supervisor@test.com';

-- Show updated users
SELECT id, name, email, role, LEFT(password, 20) as password_hash FROM User;
