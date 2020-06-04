tabs = {
	isAllHidden: false,
	
    init: function () {
		
		/*this.classContainer = ''; //classe do container(conteudo de cada pagina)
		  this.classContainerAtivo = ''; //classe do container ATIVO(conteudo de cada pagina)
		  this.classContainerInativo = ''; //classe do container INATIVO(conteudo de cada pagina)
		  
		  this.classContainerRouter = ''; //classe dos ContainerRouters(Page1, Page2)
		  this.classContainerRouterAtivo = ''; //classe dos ContainerRouters ATIVO(Page1, Page2)	
		  this.classContainerRouterInativo = ''; //classe dos ContainerRouters INATIVO(Page1, Page2)	  
		  this.attrContainer = ''; //atributo inline que fica na tag do ContainerRouter(Page1, Page2)*/

        $('.' + tabs.classContainerRouter).each(function () {
            $(this).click(function () {
				
                var id = $(this).attr('id');
                var containerId = $(this).attr(tabs.attrContainer);

                tabs.prepareReloadPage()
                tabs.activeContainerRouter(id);
                tabs.activeContainer(containerId);
            });
        });
    },

    //região dos métodos de ação

    //vai para uma determinada aba
    //recebe o id da aba como parametro
    goToTab: function (tabId) {	
        var containerId = $('#' + tabId).attr(tabs.attrContainer);		
        tabs.prepareReloadPage();
				
		if (this.isAllHidden){
			tabs.activeContainer(containerId);
		}
		else{
			tabs.activeContainerRouter(tabId);
			tabs.activeContainer(containerId);
		}	
    },
	
	//Oculta uma aba
	ocultarTab : function(tabId){
		$('#'+tabId).css('display', 'none');
	},
	
	//mostra uma aba
	mostrarTab : function(tabId){
		$('#'+tabId).css('display', 'block');
	},
	
	//oculta todas as abas
	OcultarTabs : function(){
		this.isAllHidden = true;
		tabs.desativeContainerRouters();
		
		$('.' + tabs.classContainerRouter).each(function () {
            $(this).css('display', 'none');
        });		
	},
	
    //região do métodos de acesso ás classes

    //seta a class DEFAULT do container(conteudo da pagina)
    setClassContainer: function (classParm) {
        this.classContainer = classParm;
    },

    //seta a class do container(conteudo da pagina) quando a página esta ATIVA
    setClassContainerAtivo: function (classContainerAtivoParm) {
        this.classContainerAtivo = classContainerAtivoParm;

    },

    //seta a class do container(conteudo da pagina) quando a página esta INATIVA
    setClassContainerInativo: function (classContainerInativoParm) {
        this.classContainerInativo = classContainerInativoParm;
    },

    //seta a class DEFAULT do link(abinha)
    setClassContainerRouter: function (classParm) {
        this.classContainerRouter = classParm;
    },

    //seta a class ATIVA do link(abinha)
    setClassContainerRouterAtivo: function (classContainerRouterAtivoParm) {
        this.classContainerRouterAtivo = classContainerRouterAtivoParm;
    },

    //seta a class INATIVA do link(abinha)
    setClassContainerRouterInativo: function (classContainerRouterInativoParm) {
        this.classContainerRouterInativo = classContainerRouterInativoParm;
    },

    //seta o nome do atributo Container, que vai ser usado inline na tag da abinha
    setAttrContainer: function (attrContainerParm) {
        this.attrContainer = attrContainerParm;
    },

    //região de métodos auxiliares

    //ativa uma determinada aba
    activeContainerRouter: function (containerRouterID) {
		$('#' + containerRouterID).attr('class', tabs.classContainerRouter + ' ' + tabs.classContainerRouterAtivo);
    },

    //ativa um determinado conteúdo
    activeContainer: function (containerID) {
        $('#' + containerID).attr('class', tabs.classContainer + ' ' + tabs.classContainerAtivo);
    },

    //desativa todas as abas
    desativeContainerRouters: function () {
        $('.' + tabs.classContainerRouter).each(function () {
            $(this).attr('class', tabs.classContainerRouter);
        });
    },
	
	//desativa uma aba em específico
    desativeContainerRouter: function (tabId) {
        $('#'+tabId).attr('class', tabs.classContainerRouter);
    },

    //desativva todos os containers da tela(conteudos)
    desativeContainers: function () {
        $('.' + tabs.classContainer).each(function () {
            $(this).attr('class', tabs.classContainer + ' ' + tabs.classContainerInativo);
        });
    },
	
	//desativva um container em específico
    desativarContainer: function (tabId) {
		var containerId = this.getContainerTab(tabId);
		
		$('#'+containerId).attr('class', tabs.classContainer + ' ' + tabs.classContainerInativo);
    },
	
	
	//retorna o container de uma tab
	getContainerTab: function (tabId){
		return containerId = $('#' + tabId).attr(tabs.attrContainer);
	},

    //prepara a página para ativar a nova pagina de acordo com a aba clicada
    prepareReloadPage: function () {
        tabs.desativeContainerRouters();
        tabs.desativeContainers();
    },
	
	atualizaSituacaoContainers: function(){
		$('.' + tabs.classContainerRouter).each(function () {
            var classItem = $(this).attr('class');
			var id = $(this).attr('id');
			var containerId = tabs.getContainerTab(id);
			
			if(classItem.indexOf('active') > 0){
				$('#'+containerId).css('display', 'block');
			}else{
				$('#'+containerId).css('display', 'none');
			}
        });
	}
}