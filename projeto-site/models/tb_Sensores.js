'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Sensor = sequelize.define('Sensor',{
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		horario_inicio: {
			field: 'horario_inicio',
			type: DataTypes.DATE,
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
