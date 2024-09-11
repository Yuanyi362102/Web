-- 创建表的 SQL 语句
CREATE TABLE IF NOT EXISTS user (
	id int NOT NULL,
	username TEXT NOT NULL,
	password TEXT NOT NULL,
	pic TEXT
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (1, 'qiuchuang7', '123456', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (62, 'qiuchuang', '123456', 'https://s2.loli.net/2024/08/19/dIauDHQl4ViGJj1.jpg');
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (63, 'lihua', '362102', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (64, '秋窗1', '1234567', 'https://krseoul.imgtbl.com/i/2024/08/19/66c296964f836.jpg');
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (65, '秋窗6', '123456', 'https://krseoul.imgtbl.com/i/2024/08/19/66c29697b3c88.jpeg');
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (66, '元帅', 'ys20030918', 'https://krseoul.imgtbl.com/i/2024/08/19/66c29697b3c88.jpeg');
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (67, '袁帅', '123456', 'https://s2.loli.net/2024/08/19/dIauDHQl4ViGJj1.jpg');
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (68, '圆梦', '123456', 'https://s2.loli.net/2024/08/19/G8Rm2kDzjTABvPq.jpg');
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (69, '袁meng', 'Aa362102', 'https://s2.loli.net/2024/08/19/dIauDHQl4ViGJj1.jpg');
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (70, 'ym', '123456', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (71, 'ys', '123456', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (72, 'yy', '123456', 'https://s2.loli.net/2024/08/19/G8Rm2kDzjTABvPq.jpg');
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (73, '张三', '123456', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (74, '李四', '123456', NULL);
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (76, '王老五', '123456', 'https://s2.loli.net/2024/08/19/dIauDHQl4ViGJj1.jpg');
INSERT INTO `user` (`id`, `username`, `password`, `pic`) VALUES (77, '老张', '123456', 'https://s2.loli.net/2024/08/19/dIauDHQl4ViGJj1.jpg');
