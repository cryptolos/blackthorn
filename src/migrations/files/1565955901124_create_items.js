module.exports = {
    "up": "CREATE TABLE `items` (\n" +
        "  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,\n" +
        "  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,\n" +
        "  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,\n" +
        "  `price` double(8,2) NOT NULL,\n" +
        "  `created_at` timestamp NOT NULL DEFAULT NOW(),\n" +
        "  `updated_at` timestamp NOT NULL DEFAULT NOW() ON UPDATE NOW(),\n" +
        "  PRIMARY KEY (`id`)\n" +
        ") ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
    ,
    "down": "DROP TABLE `items`"
}