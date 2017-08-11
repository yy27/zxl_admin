# Host: localhost  (Version: 5.5.40)
# Date: 2017-08-11 17:36:07
# Generator: MySQL-Front 5.3  (Build 4.120)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "admin_user"
#

DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "admin_user"
#

/*!40000 ALTER TABLE `admin_user` DISABLE KEYS */;
INSERT INTO `admin_user` VALUES (1,'admin','21232f297a57a5a743894a0e4a801fc3','2017-8-9'),(2,'yanyan','7219b9b60d9d70a9a7014369d88ebefe','2017-8-9');
/*!40000 ALTER TABLE `admin_user` ENABLE KEYS */;

#
# Structure for table "c062_phone"
#

DROP TABLE IF EXISTS `c062_phone`;
CREATE TABLE `c062_phone` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `mytime` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

#
# Data for table "c062_phone"
#

/*!40000 ALTER TABLE `c062_phone` DISABLE KEYS */;
INSERT INTO `c062_phone` VALUES (1,'222','2017-08-10 10:17:23',1502331443),(2,'5623','2017-08-10 10:41:29',1502332889);
/*!40000 ALTER TABLE `c062_phone` ENABLE KEYS */;

#
# Structure for table "chart_page"
#

DROP TABLE IF EXISTS `chart_page`;
CREATE TABLE `chart_page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `page` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

#
# Data for table "chart_page"
#

/*!40000 ALTER TABLE `chart_page` DISABLE KEYS */;
INSERT INTO `chart_page` VALUES (1,'c062','page/show_phone.php?table=c062_phone'),(16,'c052','page/show_phone.php?table=c052_phone');
/*!40000 ALTER TABLE `chart_page` ENABLE KEYS */;
