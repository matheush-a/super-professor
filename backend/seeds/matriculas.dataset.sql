INSERT INTO `tipo_curso` (`descricao`) VALUES ('Graduação');
INSERT INTO `tipo_curso` (`descricao`) VALUES ('Pós-graduação');

INSERT INTO `modalidade` (`descricao`) VALUES ('Presencial');
INSERT INTO `modalidade` (`descricao`) VALUES ('EAD');

INSERT INTO `tipo_documento` (`descricao`) VALUES ('CPF');
INSERT INTO `tipo_documento` (`descricao`) VALUES ('RG');

INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Administração', '70000', 60, 1, 1);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Ciência da Computação', '60000', 12, 1, 2);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Ciência da Computação', '72000', 60, 1, 1);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Engenharia Aeroespacial', '100000', 60, 1, 1);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Engenharia Civil', '100000', 60, 1, 1);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Engenharia de Produção', '100000', 60, 1, 1);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Medicina', '600000', 60, 1, 1);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Medicina Veterinária', '70000', 60, 1, 1);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Odontologia', '120000', 60, 1, 1);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Sistemas de Informação', '72000', 60, 1, 1);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Sistemas de Informação', '60000', 60, 1, 2);

INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Gestão Coorporativa', '7000', 12, 2, 1);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Tecnologias Web', '7000', 12, 2, 1);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Tecnologias Web', '4000', 12, 2, 2);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Inteligência Artificial', '7000', 12, 2, 1);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Inteligência Artificial', '4000', 12, 2, 2);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Desenvolvimento Mobile', '7000', 12, 2, 1);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Desenvolvimento Mobile', '4000', 12, 2, 2);
INSERT INTO `curso` (`nome`, `valor`, `parcelas`, `tipoCursoId`, `modalidadeId`) VALUES ('Medicina Esportiva', '20000', 12, 2, 1);