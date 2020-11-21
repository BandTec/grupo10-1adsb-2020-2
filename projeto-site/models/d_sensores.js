'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let area = sequelize.define('area',{
		id_dados: {
			field: 'id_dados',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome_area: {
			field: 'nome_area',
			type: DataTypes.STRING,
			allowNull: false
		},
		temperatura: {
			field: 'temperatura',
			type: DataTypes.DECIMAL(3,1),//caso esteja dando problema tirar o (3,1)
			allowNull: false
		},
		umidade: {
			field: 'umidade',
			type: DataTypes.INTEGER,
			allowNull: false
        },
        horaio_captacao:{
            field: 'horario_captacao',
            type: DataTypes.DATE,
            allowNull: false
        }
	}, 
	{
		tableName: 'area', 
		freezeTableName: true, 
		underscored: true,
		timestamps: true,
	});

    return area;
};
