-- Seed users with correct bcrypt hashes
INSERT INTO User (id, name, email, password, role) VALUES 
(UUID(), 'مدير النظام', 'id1@elemancompany.net', '$2b$10$R4IxDh5DzU.S2ixuCZpBme4u3OjQDBC8jp34UdBXPqRBZPwNKOOpy', 'admin');

INSERT INTO User (id, name, email, password, role) VALUES 
(UUID(), 'مشرف تجريبي', 'supervisor@test.com', '$2b$10$BQYhQMoRC04t022HNBVKBecvM97zhhDjfyD6CdS9UcjCZlwP/llji', 'supervisor');

-- Verify
SELECT id, name, email, role FROM User;
