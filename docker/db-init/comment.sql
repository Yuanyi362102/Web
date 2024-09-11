-- 创建表的 SQL 语句
CREATE TABLE IF NOT EXISTS comment (
    id int  NOT NULL,
    content TEXT NOT NULL,
    username TEXT NOT NULL,
    pic TEXT NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (1, '123\n', 'qiu', 'https://krseoul.imgtbl.com/i/2024/08/19/66c296964f836.jpg');
INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (2, '123\n', 'qiu', 'https://krseoul.imgtbl.com/i/2024/08/19/66c296964f836.jpg');
INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (2, '223\n', 'qiu', 'https://krseoul.imgtbl.com/i/2024/08/19/66c296964f836.jpg');
INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (9, '123\n', 'qiu', 'https://krseoul.imgtbl.com/i/2024/08/19/66c296964f836.jpg');
INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (9, '测试\n', 'qiu', 'https://krseoul.imgtbl.com/i/2024/08/19/66c296964f836.jpg');
INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (10, '123\n', 'qiu', 'https://krseoul.imgtbl.com/i/2024/08/19/66c296964f836.jpg');
INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (10, '111\n', 'qiu', 'https://krseoul.imgtbl.com/i/2024/08/19/66c296964f836.jpg');
INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (6, '马龙好样的', '秋窗', 'https://krseoul.imgtbl.com/i/2024/08/19/66c29697b3c88.jpeg');
INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (1, '测试\n', '秋窗6', 'https://krseoul.imgtbl.com/i/2024/08/19/66c29697b3c88.jpeg');
INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (3, '马龙好帅\n', '秋窗6', 'https://krseoul.imgtbl.com/i/2024/08/19/66c29697b3c88.jpeg');
INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (3, '王楚钦也好帅\n', '王五', 'https://s2.loli.net/2024/08/19/dIauDHQl4ViGJj1.jpg');
INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (7, '印度好样的\n', '王五', 'https://s2.loli.net/2024/08/19/dIauDHQl4ViGJj1.jpg');
INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (5, '好\n', '秋窗6', 'https://krseoul.imgtbl.com/i/2024/08/19/66c29697b3c88.jpeg');
INSERT INTO `comment` (`id`, `content`, `username`, `pic`) VALUES (3, '太酷啦\n', '老张', 'https://s2.loli.net/2024/08/19/dIauDHQl4ViGJj1.jpg');
