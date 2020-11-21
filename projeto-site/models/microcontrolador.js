'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Microcontrolador = sequelize.define('microcontrolador',{
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		numero_serial: {
			field: 'nome_area',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		localizacao: {
			field: 'localizacao',
			type: DataTypes.STRING(30),
			allowNull: false
		},
	}, 
	{
		tableName: 'Microcontrolador', 
		freezeTableName: true, 
		underscored: true,
		timestamps: true,
	});

    return Microcontrolador;
};
