var router = require('./router');

var app = router(9001);

var contatos = [
	{nome: "Edjan Souza Santos", data: "1974-01-01", sexo: {nome: "Masculino", codigo: "M"}},
	{nome: "Isabella Cacélia Vicente", data: "1996-05-20", sexo: {nome: "Feminino", codigo: "F"}},
	{nome: "Elisabeth Ribeiro", data: "1992-07-14", sexo: {nome: "Feminino", codigo: "F"}},
	{nome: "Paula Fernandes", data: "1991-03-22", sexo: {nome: "Feminino", codigo: "F"}}
];

var sexos = [
	{nome: "Masculino", codigo: "M"},
	{nome: "Feminino", codigo: "F"}
];

app.get('/sexos', function(req, res){
	res.write(JSON.stringify(sexos));
	res.end();
});

app.get('/contatos', function(req, res){
	res.write(JSON.stringify(contatos));
	res.end();
});
