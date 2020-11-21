'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Funcionario = sequelize.define('Empresa',{	
		id: {
			field: 'id_Empresa',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		nome: {
			field: 'nome',
			type: DataTypes.VARCHAR,
			allowNull: false
		},
		sobrenome: {
			field: 'sobrenome',
			type: DataTypes.VARCHAR,
			allowNull: false
		},
        telefone: {
			field: 'telefone',
			type: DataTypes.VARCHAR,
			allowNull: false
		},
        email: {
			field: 'email',
			type: DataTypes.VARCHAR,
			allowNull: false
        },
        senha: {
			field: 'senha',
			type: DataTypes.VARCHAR,
			allowNull: false
        },
        UF: {
			field: 'UF',
			type: DataTypes.CHAR,
			allowNull: false
        },
        cidade: {
			field: 'cidade',
			type: DataTypes.VARCHAR,
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
