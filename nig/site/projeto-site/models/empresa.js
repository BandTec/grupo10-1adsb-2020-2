'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Empresa = sequelize.define('Empresa',{	
		id: {
			field: 'id_Empresa',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		nome_empresa: {
			field: 'nome_Empresa',
			type: DataTypes.STRING,
			allowNull: false
		},
		cnpj: {
			field: 'cnpj',
			type: DataTypes.CHAR,
			allowNull: false
		},
        codigo: {
			field: 'codigo',
			type: DataTypes.VARCHAR,
			allowNull: false
		},
        responsavel: {
			field: 'responsavel',
			type: DataTypes.REAL,
			allowNull: false
		},
	}, 
	{
		tableName: 'empresa', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Empresa;
};
