CREATE DATABASE BD_nig;
USE BD_nig;

CREATE TABLE tb_Empresa (
	id_Empresa int primary key auto_increment,
    nome_Empresa varchar (30) not null, 
    cnpj char (14) not null,
    codigo varchar (15) not null,
    responsavel varchar (45) not null
);
 
CREATE TABLE tb_Funcionario (
	id_Funcionario int primary key auto_increment,
	nome varchar(20) not null,
    sobrenome varchar (45) not null,
	telefone varchar(14) not null,
	email varchar(100) not null,
	senha varchar(64) not null,
	UF char(2) not null,
	cidade varchar(50) not null,
    cpf char(14) not null,
    fk_Empresa int,
    foreign key (fk_Empresa) references tb_Empresa(id_Empresa)
) auto_increment = 1000;
                        
CREATE TABLE tb_Controle_Login (
	id_Controle_Login int primary key auto_increment,
	horario_LogIn datetime not null,
	horario_LogOut datetime not null,
	ip_Conexao varchar(15) not null,
	fk_Funcionario int,
	foreign key (fk_Funcionario) references tb_Funcionario(id_Funcionario)
);

CREATE TABLE tb_Area (
	id_Area INT PRIMARY KEY AUTO_INCREMENT,
    nome_Area VARCHAR(30) not null,
    local_Area VARCHAR (40) not null,
    fk_Empresa INT,
    FOREIGN KEY (fk_Empresa) REFERENCES tb_Empresa(id_Empresa)
);

CREATE TABLE tb_Sensores (
  id_Sensor INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(20) NOT NULL,
  horario_inicio DATETIME NOT NULL,
  estado_Sensor BOOLEAN DEFAULT TRUE not null,
  horario_parada DATETIME not null,
  fk_Area INT,
  FOREIGN KEY (fk_Area) REFERENCES tb_Area(id_Area)
);

CREATE TABLE tb_Dados_Sensores (
  id_dados INT PRIMARY KEY AUTO_INCREMENT,
  temperatura DECIMAL(3,1) NOT NULL,
  umidade INT NOT NULL,
  horario_captacao DATETIME NOT NULL,
  fk_Sensores int,
  foreign key (fk_Sensores) references tb_Sensores(id_Sensor)
);
