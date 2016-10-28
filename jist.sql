-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema Jist
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Jist` ;

-- -----------------------------------------------------
-- Schema Jist
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Jist` DEFAULT CHARACTER SET utf8 ;
USE `Jist` ;

-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(254) NOT NULL,
  `email` VARCHAR(45) NULL,
  `fname` VARCHAR(45) NOT NULL,
  `lname` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `job`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `job` ;

CREATE TABLE IF NOT EXISTS `job` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `company_name` VARCHAR(45) NOT NULL,
  `job_title` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `app_date` DATE NULL,
  `contact_fname` VARCHAR(45) NULL,
  `contact_lname` VARCHAR(45) NULL,
  `contact_phone` VARCHAR(45) NULL,
  `contact_email` VARCHAR(45) NULL,
  `offer` VARCHAR(45) NULL,
  `desired_salary` FLOAT NULL,
  `offered_salary` FLOAT NULL,
  `posting_url` VARCHAR(254) NULL,
  `sal_type` VARCHAR(45) NULL,
  `notes` VARCHAR(255) NULL,
  `start_date` DATE NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_job_user_idx` (`user_id` ASC),
  CONSTRAINT `fk_job_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO user;
 DROP USER user;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'user' IDENTIFIED BY 'password';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user';
GRANT SELECT, INSERT, TRIGGER ON TABLE * TO 'user';
SET SQL_MODE = '';
GRANT USAGE ON *.* TO user@localhost;
 DROP USER user@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user'@'localhost';
GRANT SELECT, INSERT, TRIGGER ON TABLE * TO 'user'@'localhost';

-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `Jist`;
INSERT INTO `user` (`id`, `username`, `password`, `email`, `fname`, `lname`, `location`) VALUES (1, 'user1', 'user1', 'user1@user1.com', 'Testy', 'McTestface', 'Denver');
INSERT INTO `user` (`id`, `username`, `password`, `email`, `fname`, `lname`, `location`) VALUES (2, 'user2', 'user2', 'steve@test.com', 'Steve', 'Lastname', 'Chicago');

COMMIT;


-- -----------------------------------------------------
-- Data for table `job`
-- -----------------------------------------------------
START TRANSACTION;
USE `Jist`;
INSERT INTO `job` (`id`, `user_id`, `company_name`, `job_title`, `city`, `state`, `app_date`, `contact_fname`, `contact_lname`, `contact_phone`, `contact_email`, `offer`, `desired_salary`, `offered_salary`, `posting_url`, `sal_type`, `notes`, `start_date`) VALUES (1, 1, 'Vandelay Industries', 'Vice President', 'Seattle', 'WA', '2017-01-16', 'Art', 'Vandelay', '555-1234', 'art@vandelayind.com', '1', 250000, 180000, 'urlhereforvandelay', 'year', 'notes go here', '2017-01-18');
INSERT INTO `job` (`id`, `user_id`, `company_name`, `job_title`, `city`, `state`, `app_date`, `contact_fname`, `contact_lname`, `contact_phone`, `contact_email`, `offer`, `desired_salary`, `offered_salary`, `posting_url`, `sal_type`, `notes`, `start_date`) VALUES (2, 1, 'Reddit', 'Director of Marketing', 'San Francisco', 'CA', '2017-01-16', 'Guy', 'LeDouche', '555-7890', 'guy@reddit.com', '0', 175000, 185000, 'urlhereforreddit', 'year', 'notes go here', '2017-01-18');
INSERT INTO `job` (`id`, `user_id`, `company_name`, `job_title`, `city`, `state`, `app_date`, `contact_fname`, `contact_lname`, `contact_phone`, `contact_email`, `offer`, `desired_salary`, `offered_salary`, `posting_url`, `sal_type`, `notes`, `start_date`) VALUES (3, 1, 'TestCo', 'TestPosition', 'TestCity', 'CO', '2017-01-16', 'TestFName', 'TestLName', '555-TEST', 'test1@test.com', '1', 100000, 100000, 'testurl1', 'contract', 'test notes for user 1', '2017-01-18');
INSERT INTO `job` (`id`, `user_id`, `company_name`, `job_title`, `city`, `state`, `app_date`, `contact_fname`, `contact_lname`, `contact_phone`, `contact_email`, `offer`, `desired_salary`, `offered_salary`, `posting_url`, `sal_type`, `notes`, `start_date`) VALUES (4, 2, 'TestCo', 'TestPosition', 'TestCity', 'FL', '2017-01-16', 'TestFName', 'TestLName', '555-TEST', 'test2@test.com', '0', 50000, 75000, 'testurl2', 'year', 'test notes for user 2', '2017-01-18');
INSERT INTO `job` (`id`, `user_id`, `company_name`, `job_title`, `city`, `state`, `app_date`, `contact_fname`, `contact_lname`, `contact_phone`, `contact_email`, `offer`, `desired_salary`, `offered_salary`, `posting_url`, `sal_type`, `notes`, `start_date`) VALUES (5, 2, 'Marsh Initiative', 'Key Account Manager', 'South Park', 'CO', '2017-01-16', 'Randy', 'Marsh', '555-1010', 'randy@marshco.com', '1', 3000, 3000, 'urlhereformarsh', 'month', 'notes go here', '2017-01-18');

COMMIT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
