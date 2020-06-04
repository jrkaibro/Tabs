function KnetTabs()
{	
	this.TabsData;
	this.SelectedTab;
	this.Width;
	this.Height;
	

	// Databinding for property TabsData
	this.SetTabsData = function(data)
	{
		///UserCodeRegionStart:[SetTabsData] (do not remove this comment.)

		this.TabsData = data;				
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property TabsData
	this.GetTabsData = function()
	{
		///UserCodeRegionStart:[GetTabsData] (do not remove this comment.)

        return this.TabsData;
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property SelectedTab
	this.SetSelectedTab = function(data)
	{
		///UserCodeRegionStart:[SetSelectedTab] (do not remove this comment.)


		this.SelectedItem = data;
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property SelectedTab
	this.GetSelectedTab = function()
	{
		///UserCodeRegionStart:[GetSelectedTab] (do not remove this comment.)

		return this.SelectedTab;
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	
	this.initKnetTabs = function() {
				
		tabs.setClassContainer('frame')
		tabs.setClassContainerAtivo('active');
		tabs.setClassContainerInativo('');		
		tabs.setClassContainerRouter('containerRouter');
		tabs.setClassContainerRouterAtivo('active');
		tabs.setAttrContainer('container');	
		tabs.init();		
	}
	

	this.show = function()
	{
		this.initKnetTabs();
	}
	
   this.goToTab = function(Tab) {
		if (Tab){
			var element = document.getElementById(Tab);
			
			if (element){
				tabs.goToTab(Tab);
			}
		}
	}
		
	// Shortuct functions
	this.Hidden = function(Tab) {
	
		if (Tab){		
			var element = document.getElementById(Tab);
			
			if (element){
			
				var styleElement = element.style;
				
				if (styleElement){
					var state = styleElement.display;		
				
					if (state == 'block' || state == '') {
							element.style.display = 'none';
						} else {
							element.style.display = 'block';							
					}
				}
			}
		}
	}
	
	this.ocultarTab = function(tabId, tabIdAtiva){
		tabs.ocultarTab(tabId);	
		
		if(tabIdAtiva != 'undefined'){
			tabs.goToTab(tabIdAtiva)
		}

		tabs.atualizaSituacaoContainers();
	}
	
	this.mostrarTab = function(tabId){	
		tabs.mostrarTab(tabId);
	}
	
	this.OcultarTabs = function(){
		tabs.OcultarTabs();
	}
	
	this.ClosePopUp = function(){
		gx.fn.closeWindow();
	}
}