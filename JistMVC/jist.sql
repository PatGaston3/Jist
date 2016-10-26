-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

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
  `app_date` DATETIME NULL,
  `contact_fname` VARCHAR(45) NULL,
  `contact_lname` VARCHAR(45) NULL,
  `contact_phone` VARCHAR(45) NULL,
  `contact_email` VARCHAR(45) NULL,
  `offer` TINYINT(1) NULL,
  `desired_salary` FLOAT NULL,
  `offered_salary` FLOAT NULL,
  `posting_url` VARCHAR(254) NULL,
  `sal_type` VARCHAR(45) NULL,
  `notes` VARCHAR(255) NULL,
  `start_date` DATETIME NULL,
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

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `user` (`id`, `username`, `password`, `email`, `fname`, `lname`, `location`) VALUES (1, 'test', 'password', 'test@test.com', 'testy', 'mctestface', 'denver');

COMMIT;


-- -----------------------------------------------------
-- Data for table `job`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `job` (`id`, `user_id`, `company_name`, `job_title`, `city`, `state`, `app_date`, `contact_fname`, `contact_lname`, `contact_phone`, `contact_email`, `offer`, `desired_salary`, `offered_salary`, `posting_url`, `sal_type`, `notes`, `start_date`) VALUES (1, 1, 'white_house', 'president', 'washington', 'dc', '10/26/16', 'barack', 'obama', '123-456-7890', 'barry@obams.com', 1, 100000000, 65000, 'https://www.youtube.com/watch?v=WHWmOEVd63E', 'year', 'none', '01/01/17');

COMMIT;

