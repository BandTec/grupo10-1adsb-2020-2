'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Funcionario = sequelize.define('Funcionario',{	
		id: {
			field: 'id_Funcionario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		sobrenome: {
			field: 'sobrenome',
			type: DataTypes.STRING,
			allowNull: false
		},
        telefone: {
			field: 'telefone',
			type: DataTypes.STRING, // ALTERANDO DE VARCHAR PARA STRING POPIS ESTAVA DANDO ERRO
			allowNull: false
		},
        email: {
			field: 'email',
			type: DataTypes.STRING,// DEPOIS REVER O TAMANHO DO CAMPO NO DATABASE
			allowNull: false
        },
        senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
        },
        UF: {
			field: 'UF',
			type: DataTypes.CHAR,
			allowNull: false
        },
        cidade: {
			field: 'cidade',
			type: DataTypes.STRING,
			allowNull: false
        },
        cpf: {
			field: 'cpf',
			type: DataTypes.CHAR,
			allowNull: false
		},
	}, 
	{
		tableName: 'funcionario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Funcionario;
};
