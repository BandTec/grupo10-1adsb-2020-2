'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Area = sequelize.define('Area',{	
		id: {
			field: 'id_Area',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		nome_area: {
			field: 'nome_Area',
			type: DataTypes.VARCHAR,
			allowNull: false
		},
		local_area: {
			field: 'local_Alrea',
			type: DataTypes.VARCHAR,
			allowNull: false
		},
	}, 
	{
		tableName: 'area', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Area;
};
