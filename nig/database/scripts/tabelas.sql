-- CRIANDO BANCO --

CREATE DATABASE bd_nig;

-- SELECIONANDO BANCO CRIADO --

USE bd_nig;

-- CRIANDO TABELA EMPRESA --  

CREATE TABLE bd_nig.tb_empresa (
	id_empresa int primary key auto_increment,
    nome_empresa varchar (30) not null,
    estado_empresa varchar (30) not null,
    cnpj char (14) unique not null,
    responsavel varchar (45) not null
);

-- CRIANDO TABELA FUNCIONARIO -- 
 
CREATE TABLE bd_nig.tb_funcionario (
	id_funcionario int primary key auto_increment,
	nome varchar(20) not null,
    sobrenome varchar (45) not null,
	telefone varchar(14) not null,
	email varchar(100) not null unique,
	senha varchar(64) not null,
	uf char(2) not null,
	cidade varchar(50) not null,
    cpf char(14) not null unique,
    fk_empresa int not null,
    foreign key (fk_empresa) references bd_nig.tb_empresa(id_empresa)
) auto_increment = 1000;
			
-- CRIANDO TABELA CONTROLE DE LOGIN -- 
             
CREATE TABLE bd_nig.tb_controle_login (
	id_controle_login int primary key auto_increment,
	horario_login datetime not null,
	horario_logout datetime not null,
	ip_conexao varchar(15) not null,
	fk_funcionario int not null,
	foreign key (fk_funcionario) references bd_nig.tb_funcionario(id_funcionario)
);

-- CRIANDO TABELA DA AREA --

CREATE TABLE bd_nig.tb_area (
	id_area INT PRIMARY KEY AUTO_INCREMENT,
    nome_area VARCHAR(30) not null,
    fk_empresa INT not null,
    FOREIGN KEY (fk_empresa) REFERENCES bd_nig.tb_empresa(id_empresa)
);

-- CRIANDO TABELA --

CREATE TABLE bd_nig.tb_microcontrolador(
	id_microcontrolador int primary key auto_increment,
    numero_serial int not null,
    localizacao varchar(30) not null,
	fk_area INT not null,
	    FOREIGN KEY (fk_area) REFERENCES bd_nig.tb_area(id_area)
);

-- CRIANDO TABELA DE SENSOR DE UMIDADE --

CREATE TABLE bd_nig.tb_sensor_dht11 (
	id_sensor_dht11 INT PRIMARY KEY AUTO_INCREMENT,
	nome_sensor_dht11 VARCHAR(20) NOT NULL,
    inicio_funcionamento DATETIME NOT NULL,
    termino_funcionamento DATETIME NOT NULL,
    estado_sensor_dht11 BOOLEAN DEFAULT FALSE,
    fk_microcontrolador INT not null,
	    FOREIGN KEY (fk_microcontrolador) REFERENCES bd_nig.tb_microcontrolador(id_microcontrolador)
);

-- CRIANDO TABELA DE DADOS DE TEMPERATURA --

CREATE TABLE bd_nig.tb_dado_dht11 (
	id_dado INT PRIMARY KEY AUTO_INCREMENT,
    temperatura DECIMAL(3,1) NOT NULL,
    umidade int not null,
    horario_captacao DATETIME NOT NULL,
    fk_sensor INT not null,
		FOREIGN KEY (fk_sensor) REFERENCES bd_nig.tb_sensor_lm35(id_sensor_dht11)
);
