module.exports = {
    "up": "CREATE TABLE `cart_items` (\n" +
        "  `cart_id` int(10) unsigned NOT NULL,\n" +
        "  `item_id` int(10) unsigned NOT NULL,\n" +
        "  `quantity` int(10) unsigned NOT NULL,\n" +
        "  PRIMARY KEY (`cart_id`, `item_id`)\n" +
        ") ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;"
    ,
    "down": "DROP TABLE `cart_items`"
}