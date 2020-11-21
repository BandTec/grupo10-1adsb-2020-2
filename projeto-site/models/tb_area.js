'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let area = sequelize.define('area',{
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome_area: {
			field: 'nome_area',
			type: DataTypes.STRING,
			allowNull: false
		},
		horario_inicio: {
			field: 'horario_inicio',
			type: DataTypes.STRING(30),//caso esteja dando problema tirar o (30)
			allowNull: false
		},
		estdo_sensor: {
			field: 'estdo_sensor',
			type: DataTypes.BOOLEAN,
			allowNull: false
        },
        horaio_parada:{
            field: 'horario_parada',
            type: DataTypes.DATE,
            allowNull: false
        }
	}, 
	{
		tableName: 'Sensor', 
		freezeTableName: true, 
		underscored: true,
		timestamps: true,
	});

    return Sensor;
};
