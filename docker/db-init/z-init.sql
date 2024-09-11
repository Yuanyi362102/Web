-- db-init/init.sql
-- SET NAMES 'utf8mb4';
-- SET CHARACTER SET utf8mb4;
-- SET character_set_connection = utf8mb4;
-- SET character_set_database = utf8mb4;
-- SET character_set_server = utf8mb4;
ALTER DATABASE demo CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
ALTER TABLE HotNews CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE comment CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE feedback CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE searchNews CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE user CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
SET NAMES 'utf8mb4' COLLATE 'utf8mb4_unicode_ci';
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123';
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123';