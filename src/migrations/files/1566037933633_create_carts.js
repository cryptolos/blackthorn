module.exports = {
    "up": "CREATE TABLE `carts` (\n" +
        "  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,\n" +
        "  `total_net` double(8,2) NULL DEFAULT 0,\n" +
        "  `tax` double(8,2) NULL DEFAUlT 0,\n" +
        "  `discount` double(8,2) NULL DEFAUlT 0,\n" +
        "  `total` double(8,2) NULL DEFAUlT 0,\n" +
        "  `created_at` timestamp NOT NULL DEFAULT NOW(),\n" +
        "  `updated_at` timestamp NOT NULL DEFAULT NOW() ON UPDATE NOW(),\n" +
        "  PRIMARY KEY (`id`)\n" +
        ") ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
    ,
    "down": "DROP TABLE `carts`"
}