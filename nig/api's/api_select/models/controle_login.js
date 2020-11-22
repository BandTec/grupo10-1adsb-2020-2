'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Controle_login = sequelize.define('Controle_login',{	
		id: {
			field: 'id_Controle_Login',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		horario_logIn: {
			field: 'horario_logIn',
			type: DataTypes.DATE,
			allowNull: false
		},
		horario_logOut: {
			field: 'horario_logOut',
			type: DataTypes.DATE,
			allowNull: false
		}/*,
        ip_Conexao: {
			field: 'ip_Conexao',
			type: DataTypes.STRING(50),
			allowNull: false
		},*/
	}, 
	{
		tableName: 'controle_login', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Controle_login;
};
