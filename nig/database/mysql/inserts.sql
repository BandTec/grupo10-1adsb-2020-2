USE bd_nig;


insert into tb_Empresa values (null,'Vale','Minas Gerais','0000-123456/22','vale2020ads','João Macedo'),
							  (null,'Gorverno Federal Paraná','Paraná','0000-458753/22','gfparana2020ads','Carolina Alubuquerque'),
                              (null,'Exército Brasileiro','Acre','0000-564231/22','exbra2020ads','Cristina Silva');

insert into tb_Funcionario values (null,'José','Santos','(41)95124-2454','jose.santos@email.com','ze@admin','PR','Curitiba','038.397.279-52',2),
								  (null,'Maria','Santana','(41)91234-2999','maria.santana@email.com','mariazinhaparana','PR','Curitiba','949.419.629-58',2),
                                  (null,'João','Kristen','(68)96421-2136','kristen@gmail.com','kristenjow','AC','Rio Branco','350.645.412-95',3),
                                  (null,'Mateus','Flores','(68)65444-6564','m.flores@gmail.com','mfloresac','AC','Rio Branco','259.459.899-24',3),
                                  (null,'Rogéria','Oliveira','(31)96154-5611','rogerinha.oliveira@gmail.com','senhadificil','MG','Belo Horizonte','120.150.856-88',1),
                                  (null,'Vilma','Sabará','(31)99841-5475','sabara.vil@gmail.com','veganismobom','MG','Belo Horizonte','281.635.026-65',1);

insert into tb_Controle_Login values (null,'2020-10-24T14:25:15','2020-10-24T18:45:41','192.153.0.1',1001),
                                     (null,'2020-10-25T10:41:04','2020-10-25T14:42:35','192.153.0.4',1002),
                                     (null,'2020-10-02T09:00:50','2020-10-02T13:56:26','192.153.0.5',1003),
                                     (null,'2020-10-01T22:13:22','2020-10-01T02:24:59','192.153.0.3',1004),
                                     (null,'2020-10-26T02:00:30','2020-10-26T06:35:51','192.153.0.2',1005),
                                     (null,'2020-10-15T18:14:35','2020-10-15T00:37:41','192.155.0.1',1000);

insert into tb_Area values (null,'Alto Juruá',3),
						   (null,'Reserva Ambiental Serelepe',2),
                           (null,'Floresta Estadual do Uaimií',1);

-- CRIAR ABAIXO INSERÇÃO DOS SENSORES, SEUS DADOS E MICROCONTROLADOR -- 