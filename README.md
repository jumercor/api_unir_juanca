# api_unir_juanca
Esta es la api creada para el blog, en dónde se pueden consultar y crear autores y blogs

Ejecutar las siguientes query para crear tablas en sql y poblarlas

CREATE SCHEMA `Unir` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;


CREATE TABLE `tareas_unir`.`autor` (
  `id_autor` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(45) NULL,
  PRIMARY KEY (`id_autor`));



CREATE TABLE `tareas_unir`.`posts` (
  `id_post` INT NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `fecha_creacion` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `categoria` VARCHAR(45) NULL,
  `id_autor` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_post`));

INSERT INTO `Unir`.`posts` (`id_post`, `titulo`, `descripcion`, `categoria`, `id_autor`) VALUES ('1', 'Mi marido me odia', 'Serie de drama intensa del día a día', 'drama', '2');
INSERT INTO `Unir`.`posts` (`id_post`, `titulo`, `descripcion`, `categoria`, `id_autor`) VALUES ('2', 'Necesito vacaciones', 'Hasta tú lo habeis dicho antes', 'psicolgia', '1');
INSERT INTO `Unir`.`posts` (`id_post`, `titulo`, `descripcion`, `categoria`, `id_autor`) VALUES ('3', 'Como comer vacas', 'Si eres vegano mejor no lo leas, o si?', 'nutrición', '3');
INSERT INTO `Unir`.`posts` (`id_post`, `titulo`, `descripcion`, `categoria`, `id_autor`) VALUES ('4', 'El libro secreto de magimbu', 'Nada del otro mundo', 'infantil', '1');



INSERT INTO `tareas_unir`.`autor` (`id_autor`, `nombre`, `email`, `imagen`) VALUES ('1', 'Juan Mercado', 'jumercor@hotmail.com', 'foto1.png');
INSERT INTO `tareas_unir`.`autor` (`id_autor`, `nombre`, `email`, `imagen`) VALUES ('2', 'Iván Pedrozo', 'ivanpedrozoc@gmail.com', 'foto2.png');
INSERT INTO `tareas_unir`.`autor` (`id_autor`, `nombre`, `email`) VALUES ('3', 'Carmen Gloria', 'cgloria@hotmail.com');
