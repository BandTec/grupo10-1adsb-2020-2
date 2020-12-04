CREATE DATABASE BD_nig;
USE BD_nig;

CREATE TABLE tb_Empresa (
	id_Empresa int primary key auto_increment,
    nome_Empresa varchar (30),
    estado_Empresa varchar (30),
    cnpj char (14),
    responsavel varchar (45)
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
	horario_Login datetime,
	horario_Logout datetime,
	ip_Conexao varchar(15) not null,
	fk_Funcionario int,
	foreign key (fk_Funcionario) references tb_Funcionario(id_Funcionario)
);

CREATE TABLE tb_Area (
	id_Area INT PRIMARY KEY AUTO_INCREMENT,
    nome_Area VARCHAR(30),
    fk_Empresa INT,
    FOREIGN KEY (fk_Empresa) REFERENCES tb_Empresa(id_Empresa)
);

CREATE TABLE tb_Sensor_Dht11 (
  id_Dados INT PRIMARY KEY AUTO_INCREMENT,
  nome_Sensor VARCHAR(20) NOT NULL,
  inicio_Funcionamento DATETIME NOT NULL,
  estado_Sensor BOOLEAN DEFAULT TRUE,
  termino_Funcionamento DATETIME,
  fk_Area INT,
  FOREIGN KEY (fk_Area) REFERENCES tb_Area(id_Area)
);

CREATE TABLE tb_Dados_Dht11 (
  id_Dados INT PRIMARY KEY AUTO_INCREMENT,
  temperatura DECIMAL(3,1) NOT NULL,
  umidade INT NOT NULL,
  horario_Captacao DATETIME NOT NULL,
  fk_Sensor int,
  foreign key (fk_Sensor) references tb_Sensor_Dht11(id_Dados)
);

CREATE TABLE tb_Contato (
	id_Contato INT PRIMARY KEY auto_increment,
    email_Contato varchar(100) not null,
    nome_Contato varchar(30) not null,
    mensagem_Contato varchar(256) not null
);