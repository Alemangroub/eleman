-- Update users with correct bcrypt hashes

-- Update admin password (elemancompanyid111)
UPDATE User SET password = '$2b$10$o.6ScCnuNZquGR6NdZql2eKRxjgJqNarlmwC1HtvMrjUZqWa8w30C' WHERE email = 'id1@elemancompany.net';

-- Update supervisor password (123456)
UPDATE User SET password = '$2b$10$6ilEGiMB6CvQo59DVcdBOOR/UJHZyYrhIrmQnlNXFt6c1PNjUvjaK' WHERE email = 'supervisor@test.com';

-- Show updated users
SELECT id, name, email, role, LEFT(password, 30) as password_hash FROM User;
