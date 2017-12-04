var sequelize = require('sequelize');
var db 		  = new sequelize('db_test_api','root','root',{
	host:'localhost',
	dialect:'mysql',
	operatorsAliases: false
});

var Article = db.define('articel',{
	title :{
		type : sequelize.STRING,
		allowNull : false,
		validate :{
			notEmpty : true,
		}
	},
	body :{
		type : sequelize.TEXT,
		allowNull : false,
		validate :{
			notEmpty : true,
		}
	}
});

var Mahasiswa = db.define('mahasiswa',{
	nim :{
		type : sequelize.STRING,
		allowNull : false,
		validate :{
			notEmpty : true,
			len :{
                 args: [6, 128],
                 msg: "Panjang Karakter Minimal 6 sampai 128"
            },
            isNumeric :{
            	msg : 'Nim Yang Anda Masukkan Hurus Format 0-9'
            }
		}
	},
	nama :{
		type : sequelize.TEXT,
		allowNull : false,
		validate :{
			notEmpty : true,
			len :{
                 args: [6, 128],
                 msg: "Panjang Karakter Minimal 6 sampai 128"
            },
		}
	},
	email :{
		type : sequelize.STRING,
		allowNull : false,
		validate :{
			notEmpty : true,
			len :{
                 args: [6, 128],
                 msg: "Panjang Karakter Minimal 6 sampai 128"
            },
            isEmail: {
                msg: "Email yang anda masukkan tidak valid"
            }
		}
	},
	no_hp :{
		type : sequelize.TEXT,
		allowNull : false,
		validate :{
			isNumeric : true,
		}
	}
});

module.exports = {
	Article 	: Article,
	Mahasiswa 	: Mahasiswa,
	db 			: db
}

