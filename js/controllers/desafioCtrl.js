angular.module("desafio").controller("desafioCtrl", function ($scope, $http) {
				$scope.app = "Desafio";
				$scope.contatos = [];
				$scope.sexos = [];

				var carregarContatos = function() {
					$http.get("dados/users.json").then(function(data){
						$scope.contatos = data.data;
					});
				};
				var carregarSexos = function() {
					$http.get("/dados/gender.json").then(function(data){
						$scope.sexos = data.data;
					});;
				};
				$scope.adicionarContato = function(contato) {
					$scope.contatos.push(angular.copy(contato));
					delete $scope.contato;
					$scope.contatoForm.$setPristine();
					$scope.openForm = false;
				};
				$scope.cancelarCadasro = function(contato) {
					delete $scope.contato;
					$scope.openForm = false;
				};
				$scope.ordenarPor = function(campo) {
					$scope.criterioBusca = "";
					$scope.criterioOrdenacao = campo;
					$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
				};

				$scope.iconGender = function(texto) {
					var gender;
					if (texto =="Masculino"){
						gender = "fa fa-mars";
					}
					else if (texto =="Feminino"){
						gender = "fa fa-venus";
					}
					return gender;
				};

				$scope.classe1 = "selecionado";
				$scope.classe2 = "negrito";

				carregarContatos();
				carregarSexos();
			});