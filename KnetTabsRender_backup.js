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
		///UserCodeRegionStart:[show] (do not remove this comment.)

	   if (!this.IsPostBack)		
		{

			var buffer = new gx.text.stringBuffer();
			buffer.clear();
						
			var markup = this.loadSystemData(this.TabsData);
			buffer.append(markup);
			this.setHtml(buffer.toString());			
			this.initKnetTabs();			
		}			
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	  this.tmpbuffer = new gx.text.stringBuffer();
	  this.tmpbuffer.clear();
	  
	  
      this.loadSystemData = function(data) {  
	  var i = 0;	
	  
	  
	  
	this.tmpbuffer.append('<div class="page-control span10" data-role="page-control">');								
	this.tmpbuffer.append('<ul>');
			
	var x = 0;			
	var t = 0;	
	for(i=0;this.TabsData[i]!=undefined;i++){
		x++;		
	    var Container = this.TabsData[i].TabData_Container.Container;		
		
	if(x ==1 ) {									
     this.tmpbuffer.append('<li class="active containerRouter" id="'+ this.TabsData[i].TabID +'" container="'+Container+'"><a>'+this.TabsData[i].TabName+'</a></li>');
	} else {
	 this.tmpbuffer.append('<li class="containerRouter" id="'+ this.TabsData[i].TabID +'" container="'+Container+'"><a>'+this.TabsData[i].TabName+'</a></li>');	
	}
	
    }
			this.tmpbuffer.append('</ul>');				
					this.tmpbuffer.append('<div class="frames">');
					for(z=0;this.TabsData[z]!=undefined;z++){

						t++;	
			
						if (t==1) {
							this.tmpbuffer.append('<div class="frame active" id="'+this.TabsData[z].TabData_Container.Container+'">');
							this.tmpbuffer.append('<iframe src="'+this.TabsData[z].TabData_Container.Url+'" width="100%" height="100%" frameborder="0"></iframe>');
							this.tmpbuffer.append('</div>');
						} else {
							this.tmpbuffer.append('<div class="frame containerInative" id="'+this.TabsData[z].TabData_Container.Container+'">');
							this.tmpbuffer.append('<iframe src="'+this.TabsData[z].TabData_Container.Url+'" width="100%" height="100%" frameborder="0"></iframe>');
							this.tmpbuffer.append('</div>');							
						} 
											
					}
					
				this.tmpbuffer.append('</div>');
				
				this.tmpbuffer.append('</div>');
				
//				document.getElementById(this.ContainerName).innerHTML = buffer;					
 			    return this.tmpbuffer;			

		}
		
		// Shortuct functions
	   this.goToTab = function(Tab) {
            tabs.goToTab(Tab);
	   }
	
	///UserCodeRegionEnd: (do not remove this comment.):
}