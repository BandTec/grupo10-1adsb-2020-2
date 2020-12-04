'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Dados_sensor = sequelize.define('Dados_sensor',{
		id_Dados: {
			field: 'id_Dados',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
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
        horario_Captacao:{
            field: 'horario_Captacao',
            type: DataTypes.DATE,
            allowNull: false
        },
		fk_Sensor: {
			field: 'fk_Sensor',
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, 
	{
		tableName: 'Dados_sensor', 
		freezeTableName: true, 
		underscored: true,
		timestamps: true,
	});

    return Dados_sensor;
};
