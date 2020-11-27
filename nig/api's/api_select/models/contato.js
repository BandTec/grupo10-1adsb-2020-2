'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
	let Contato = sequelize.define('Contato', {
		id_Contato: {
			field: 'id_Contato',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		email_Contato: {
			field: 'email_Contato',
			type: DataTypes.STRING,
			allowNull: true
		},
		nome_Contato: {
			field: 'nome_Contato',
			type: DataTypes.STRING,
			allowNull: true
		},
		mensagem_Contato: {
			field: 'mensagem_Contato',
			type: DataTypes.STRING,
			allowNull: true
		}
	},
		{
			tableName: 'Contato',
			freezeTableName: true,
			underscored: true,
			timestamps: true,
			attributes: {
				exclude: ['created_at', 'updated_at']
			}
		});

	return Contato;
};

/*
defaultScope: {
	attributes: {
	  exclude: ['created_at', 'updated_at']
	}
  }*/