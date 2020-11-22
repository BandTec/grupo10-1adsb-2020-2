USE BD_init_0;

SELECT * FROM tb_Area,tb_Sensores,tb_Dados_Sensores WHERE id_Area = fk_Area and id_Sensor = fk_Sensores;


SELECT * FROM tb_Empresa,tb_Funcionario,tb_Controle_Login WHERE id_Empresa = fk_Empresa and id_Funcionario = fk_Funcionario order by id_Empresa;