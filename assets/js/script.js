 var jq = $.noConflict();
//validate function
function validateContactForm(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var req = document.getElementById("contacttextarea").value;
	var success=0;
	if(name.length<1){
		jq("#name").attr("placeholder", "Name/Organisation is Mandatory").removeClass("textbox").addClass("jsvalidation");
		success=1;
	}
	var patt = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})jq/;
	var emailvalidation = patt.exec(email);
	if(email.length<1)
	{
		jq("#email").attr("placeholder", "EMail is Mandatory").removeClass("textbox").addClass("jsvalidation");
		success=1;
	}
	if(req.length<1)
	{
		jq("#contacttextarea").attr("placeholder", "Requirements is Mandatory").removeClass("textarea").addClass("jsvalidation");
		success=1;
	}
	if(success<1)
	{
		return true;
	}
	return false;
}


jq(window).resize(function() {
  //getting width and height of the screen
	var windowWidth = jq(window).width(); 
	var windowHeight = jq(window).height();
	var topContentHeight = (windowHeight*(52/100)); 
	var bottomContentHeight = (windowHeight*(48/100)); 
	jq("#midContent").css("height",topContentHeight);
	jq("#bottomLoader").css("margin-top",topContentHeight+3);
	jq("#bottomContent").css("height",bottomContentHeight-7).css("margin-top",(topContentHeight+7));
	jq("#midContent #logoLoaderfg").css("clip","rect(auto, auto, auto, auto)");
	jq("#bottomContent #runningPixels").css("clip","rect(auto, auto, auto, auto)");
	jq("#topLoader").css("clip","rect(auto, auto, auto, auto)");
	jq("#bottomLoader").css("clip","rect(auto, auto, auto, auto)");
	jq("#textContent").css("margin-left",(windowWidth/2)-312);
	jq("#buttons .contact").css("margin-left",(windowWidth/2)+30);
	jq("#textContent").css("margin-top","20px");
	jq(".navText.bottom").css("margin-left",(windowWidth/2)-100);
	jq("#infocontentLayer").css("height",windowHeight*(11/16));
	jq(".nav.bottom").css("bottom",windowHeight*(10/100));
	jq('#preLoader').css("top",windowHeight*(23/100));
	jq('#preLoader').css("right",windowHeight*(35/100));
	//positioning logo loader based on screen size
	if(windowWidth>1399)
	{
		var logoLoaderPosition = ((topContentHeight/2)+87-20-180);
		jq(".logoLoader").css("margin-top",logoLoaderPosition);
		jq(".logoLoader").css("margin-left",(windowWidth/2)-95);
		jq("#textContent").css("margin-left",(windowWidth/2)-387);
    	jq("#textContent").css("margin-top","30px");
		jq("#buttons .portfolio").css("margin-left",(windowWidth/2)-30-246);
		jq(".nav.bottom").css("margin-left",(windowWidth/2)-132);
		//portfolio positioning
		jq(".PortfolioRect#others").css("margin-left",(windowWidth/2)-230);
		jq(".portfolioCircles#othersC").css("margin-left",(windowWidth/2)-230);
		jq(".PortfolioRect#others").css("top",745+"px");
		jq(".portfolioCircles#othersC").css("top",635+"px");
		jq(".mainicon").css("top",(windowHeight/2)-95+"px");
		jq(".mainicon").css("right",(windowWidth/2)-250+"px");
		jq(".subicon1").css("top",(windowHeight/2)-335+"px");
		jq(".subicon1").css("right",(windowWidth/2)-305+"px");
		jq(".subicon2").css("top",(windowHeight/2)-185+"px");
		jq(".subicon2").css("right",(windowWidth/2)-480+"px");
		jq(".subicon3").css("top",(windowHeight/2)+30+"px");
		jq(".subicon3").css("right",(windowWidth/2)-525+"px");
		jq(".subicon4").css("top",(windowHeight/2)+185+"px");
		jq(".subicon4").css("right",(windowWidth/2)-355+"px");
		jq(".buttoncontainer").css("right",(windowWidth/2)+175+"px");
		jq(".buttoncontainer").css("top",(windowHeight/2)-285+"px");
		jq(".imgcontainer").css("right",(windowWidth/2)+160+"px");
		jq(".imgcontainer").css("top",(windowHeight/2)+25+"px");
		//web
		jq(".PortfolioRect#web").css("margin-left",(windowWidth/2)-780);
		jq(".portfolioCircles#webC").css("margin-left",(windowWidth/2)-620);
		jq(".portfolioText.web").css("margin-left",(windowWidth/2)-540);
		//books
		jq(".PortfolioRect#book").css("right",(windowWidth/2)-780);
		jq(".portfolioCircles#bookC").css("right",(windowWidth/2)-620);
		//logo
		jq(".PortfolioRect#logo").css("margin-left",(windowWidth/2)-540);
		jq(".portfolioCircles#logoC").css("margin-left",(windowWidth/2)-680);
		jq(".portfolioText.logo").css("margin-left",(windowWidth/2)-630);
		//banner
		jq(".PortfolioRect#banner").css("right",(windowWidth/2)-540);
		jq(".portfolioCircles#bannerC").css("right",(windowWidth/2)-680);
		//displayimage
		jq("#displayImage").css("margin-left",(windowWidth/2)-210);
		//contactform
		jq("#contactform").css("margin-top",(windowHeight/2)-180);
	}else if(windowWidth<1400 && windowWidth>1024)
	{
		var logoLoaderPosition = ((topContentHeight/2)+76-43-120);
		jq(".logoLoader").css("margin-top",logoLoaderPosition);
		jq(".logoLoader").css("margin-left",(windowWidth/2)-71);
		jq("#textContent").css("margin-left",(windowWidth/2)-312);
    	jq("#textContent").css("margin-top","20px"); 
		jq("#buttons .portfolio").css("margin-left",(windowWidth/2)-30-214);
		var logoLoaderPosition = ((topContentHeight/2)+76-43-120);
		jq(".logoLoader").css("margin-top",logoLoaderPosition);
		jq(".logoLoader").css("margin-left",(windowWidth/2)-71);
		jq("#textContent").css("margin-left",(windowWidth/2)-312);
		jq("#buttons .portfolio").css("margin-left",(windowWidth/2)-30-214);
		jq("#textContent").css("margin-top","20px");
		jq(".nav.bottom").css("margin-left",(windowWidth/2)-113);
			//portfolio positioning
		jq(".PortfolioRect#others").css("margin-left",(windowWidth/2)-210);
		jq(".portfolioCircles#othersC").css("margin-left",(windowWidth/2)-210);
		jq(".PortfolioRect#others").css("top",615+"px");
		jq(".portfolioCircles#othersC").css("top",525+"px");
		
		jq(".mainicon").css("top",(windowHeight/2)-65+"px");
		jq(".mainicon").css("right",(windowWidth/2)-220+"px");
		jq(".subicon1").css("top",(windowHeight/2)-255+"px");
		jq(".subicon1").css("right",(windowWidth/2)-255+"px");
		jq(".subicon2").css("top",(windowHeight/2)-165+"px");
		jq(".subicon2").css("right",(windowWidth/2)-440+"px");
		jq(".subicon3").css("top",(windowHeight/2)+30+"px");
		jq(".subicon3").css("right",(windowWidth/2)-480+"px");
		jq(".subicon4").css("top",(windowHeight/2)+145+"px");
		jq(".subicon4").css("right",(windowWidth/2)-305+"px");
		jq(".buttoncontainer").css("right",(windowWidth/2)+155+"px");
		jq(".buttoncontainer").css("top",(windowHeight/2)-225+"px");
		jq(".imgcontainer").css("right",(windowWidth/2)+150+"px");
		jq(".imgcontainer").css("top",(windowHeight/2)+15+"px");
		//web
		jq(".PortfolioRect#web").css("margin-left",(windowWidth/2)-600);
		jq(".portfolioCircles#webC").css("margin-left",(windowWidth/2)-470);
		jq(".portfolioText.web").css("margin-left",(windowWidth/2)-395);
		//books
		jq(".PortfolioRect#book").css("right",(windowWidth/2)-600);
		jq(".portfolioCircles#bookC").css("right",(windowWidth/2)-470);
		//logo
		jq(".PortfolioRect#logo").css("margin-left",(windowWidth/2)-440);
		jq(".portfolioCircles#logoC").css("margin-left",(windowWidth/2)-560);
		jq(".portfolioText.logo").css("margin-left",(windowWidth/2)-520);
		//banner
		jq(".PortfolioRect#banner").css("right",(windowWidth/2)-440);
		jq(".portfolioCircles#bannerC").css("right",(windowWidth/2)-560);
		//displayimage
		jq("#displayImage").css("margin-left",(windowWidth/2)-185);
		//contactform
		jq("#contactform").css("margin-top",(windowHeight/2)-155);
	}else if(windowWidth<1025)
	{
		var logoLoaderPosition = ((topContentHeight/2)+54-33-100);
		jq(".logoLoader").css("margin-top",logoLoaderPosition);
		jq(".logoLoader").css("margin-left",(windowWidth/2)-60);
		jq("#textContent").css("margin-left",(windowWidth/2)-272);
    	jq("#textContent").css("margin-top","15px");
		jq("#buttons .portfolio").css("margin-left",(windowWidth/2)-30-182);
		jq(".nav.bottom").css("margin-left",(windowWidth/2)-100);
		
		jq(".mainicon").css("top",(windowHeight/2)-55+"px");
		jq(".mainicon").css("right",(windowWidth/2)-220+"px");
		jq(".subicon1").css("top",(windowHeight/2)-225+"px");
		jq(".subicon1").css("right",(windowWidth/2)-255+"px");
		jq(".subicon2").css("top",(windowHeight/2)-155+"px");
		jq(".subicon2").css("right",(windowWidth/2)-410+"px");
		jq(".subicon3").css("top",(windowHeight/2)+10+"px");
		jq(".subicon3").css("right",(windowWidth/2)-420+"px");
		jq(".subicon4").css("top",(windowHeight/2)+115+"px");
		jq(".subicon4").css("right",(windowWidth/2)-295+"px");
		jq(".buttoncontainer").css("right",(windowWidth/2)+115+"px");
		jq(".buttoncontainer").css("top",(windowHeight/2)-205+"px");
		jq(".imgcontainer").css("right",(windowWidth/2)+130+"px");
		jq(".imgcontainer").css("top",(windowHeight/2)+5+"px");
		//portfolio positioning
		jq(".PortfolioRect#others").css("margin-left",(windowWidth/2)-165);
		jq(".portfolioCircles#othersC").css("margin-left",(windowWidth/2)-165);
		jq(".PortfolioRect#others").css("top",520+"px");
		jq(".portfolioCircles#othersC").css("top",450+"px");
		//web
		jq(".PortfolioRect#web").css("margin-left",(windowWidth/2)-490);
		jq(".portfolioCircles#webC").css("margin-left",(windowWidth/2)-370);
		jq(".portfolioText.web").css("margin-left",(windowWidth/2)-320);
		//books
		jq(".PortfolioRect#book").css("right",(windowWidth/2)-490);
		jq(".portfolioCircles#bookC").css("right",(windowWidth/2)-370);
		//logo
		jq(".PortfolioRect#logo").css("margin-left",(windowWidth/2)-360);
		jq(".portfolioCircles#logoC").css("margin-left",(windowWidth/2)-480);
		jq(".portfolioText.logo").css("margin-left",(windowWidth/2)-440);
		//banner
		jq(".PortfolioRect#banner").css("right",(windowWidth/2)-360);
		jq(".portfolioCircles#bannerC").css("right",(windowWidth/2)-480);
		//displayimage
		jq("#displayImage").css("margin-left",(windowWidth/2)-150);
		//contactform
		jq("#contactform").css("margin-top",(windowHeight/2)-130);
	}else
	{
		var logoLoaderPosition = ((topContentHeight/2)+76-43-120);
		jq(".logoLoader").css("margin-top",logoLoaderPosition);
		jq(".logoLoader").css("margin-left",(windowWidth/2)-71);
		jq("#textContent").css("margin-left",(windowWidth/2)-312);
    	jq("#textContent").css("margin-top","20px"); 
		jq("#buttons .portfolio").css("margin-left",(windowWidth/2)-30-214);
		jq(".nav.bottom").css("margin-left",(windowWidth/2)-113);
		
		jq(".mainicon").css("top",(windowHeight/2)-65+"px");
		jq(".mainicon").css("right",(windowWidth/2)-220+"px");
		jq(".subicon1").css("top",(windowHeight/2)-255+"px");
		jq(".subicon1").css("right",(windowWidth/2)-255+"px");
		jq(".subicon2").css("top",(windowHeight/2)-165+"px");
		jq(".subicon2").css("right",(windowWidth/2)-440+"px");
		jq(".subicon3").css("top",(windowHeight/2)+30+"px");
		jq(".subicon3").css("right",(windowWidth/2)-480+"px");
		jq(".subicon4").css("top",(windowHeight/2)+145+"px");
		jq(".subicon4").css("right",(windowWidth/2)-305+"px");
		jq(".buttoncontainer").css("right",(windowWidth/2)+155+"px");
		jq(".buttoncontainer").css("top",(windowHeight/2)-225+"px");
		jq(".imgcontainer").css("right",(windowWidth/2)+150+"px");
		jq(".imgcontainer").css("top",(windowHeight/2)+15+"px");
			//creating variable for loading logo
			//portfolio positioning
		jq(".PortfolioRect#others").css("margin-left",(windowWidth/2)-165);
		jq(".portfolioCircles#othersC").css("margin-left",(windowWidth/2)-165);
		jq(".PortfolioRect#others").css("top",520+"px");
		jq(".portfolioCircles#othersC").css("top",450+"px");
		//web
		jq(".PortfolioRect#web").css("margin-left",(windowWidth/2)-490);
		jq(".portfolioCircles#webC").css("margin-left",(windowWidth/2)-370);
		jq(".portfolioText.web").css("margin-left",(windowWidth/2)-320);
		//books
		jq(".PortfolioRect#book").css("right",(windowWidth/2)-490);
		jq(".portfolioCircles#bookC").css("right",(windowWidth/2)-370);
		//logo
		jq(".PortfolioRect#logo").css("margin-left",(windowWidth/2)-360);
		jq(".portfolioCircles#logoC").css("margin-left",(windowWidth/2)-480);
		jq(".portfolioText.logo").css("margin-left",(windowWidth/2)-440);
		//banner
		jq(".PortfolioRect#banner").css("right",(windowWidth/2)-360);
		jq(".portfolioCircles#bannerC").css("right",(windowWidth/2)-480);
		//displayimage
		jq("#displayImage").css("margin-left",(windowWidth/2)-150);
		//contactform
		jq("#contactform").css("margin-top",(windowHeight/2)-130);
	}
});
jq(window).bind('beforeunload',function(){
      jq("#contacttextarea").prop("disabled",false);
});
jq(document).ready(function() { 
	//hiding and loading items one by one
	jq(".home #nextPagenav,.home #buttons,.home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent,.home #navIcons,.home .nav.bottom").css("opacity",0.0);
	jq(".home #nextPagenav,.home #navIcons,.home #buttons").hide(100);
	
	//getting width and height of the screen
	var windowWidth = jq(window).width(); 
	var windowHeight = jq(window).height();
	//setting top content height based on window size
	jq("#tutcon").css("margin-left",(windowWidth/2)-450);
	jq("#tutcon").css("margin-top",(windowHeight/2)-300);
	var topContentHeight = (windowHeight*(52/100)); 
	var bottomContentHeight = (windowHeight*(48/100)); 
	jq("#midContent").css("height",topContentHeight);
	jq("#midFlipContent").css("height",topContentHeight);
	jq("#midFlipContent .flipContent").css("height",topContentHeight);
	jq("#midFlipContent .flipContent .mid").css("height",topContentHeight);
	jq("#bottomLoader").css("margin-top",topContentHeight+3);
	jq("#bottomContent").css("height",bottomContentHeight-7).css("margin-top",(topContentHeight+7));
	jq("#buttons .contact").css("margin-left",(windowWidth/2)+30);
	jq(".navText.bottom").css("margin-left",(windowWidth/2)-100);
	jq("#infocontentLayer").css("height",windowHeight*(11/16));
	jq("#infocontent").show();
	jq(".nav.bottom").css("bottom",windowHeight*(10/100));
	jq("#infocontent3,#infocontent2").hide();
	jq('#preLoader').css("top",windowHeight*(23/100));
	jq('#preLoader').css("right",windowHeight*(35/100));
	
	//hover
	jq("#navIcons .icons:not(#navIcons .icons.clickpage)").hover(function(){
	jq(this).addClass("selectedtab");
    jq("#navIcons .selectedtab+span p").css("display","block");
    },function(){
    jq("#navIcons .selectedtab+span p").css("display","none");
	jq(this).removeClass("selectedtab");
  });
  
  jq("#name").focus(function()
  {
	  jq(this).attr("placeholder", "NAME/ORGANIZATION")
	  jq(this).removeClass("jsvalidation").addClass("textbox");
  });
  
   jq("#email").focus(function()
  {
	  jq(this).attr("placeholder", "EMAIL")
	  jq(this).removeClass("jsvalidation").addClass("textbox");
  });
  
  jq("#contacttextarea").focus(function()
  {
	  jq(this).attr("placeholder", "YOUR REQUIREMENTS")
	  jq(this).removeClass("jsvalidation").addClass("textarea");
  });
  
  jq("#contacttextarea").focus(function()
  {
	  jq(this).prop("disabled",true);
	  jq(".reqhide").hide(400);
	  jq(".reqbot").css("margin-top","20px");
	  jq(".checkboxtopics").show(400);
	  jq(".checkboxtopics.nondefault").hide();
	  jq("#contacttextarea").attr("placeholder", "YOUR REQUIREMENTS \r\nSelect from the options below");
  });
  
 jq(".reqdone").click(function(){
	 jq(".reqhide").show(1000);
	 jq(".checkboxtopics").hide(200);
	 jq("#contacttextarea").prop("disabled",false);
	 jq(".reqbot").css("margin-top","0px");
	 setTimeout(function(){
		jq("#cbrandtab").addClass("selected");
		jq("#capptab,#cwebtab").removeClass("selected");
		jq("#contacttextarea").attr("placeholder", "YOUR REQUIREMENTS");
	},500);  
 });
 
	 jq(".checkboxcategory").change(function(){
		var selectedCategory = jq(this).val();
		var currentval = jq("#contacttextarea").val()+"  "+selectedCategory;
		if (this.checked) {
			jq('#contacttextarea').val(currentval); 
		}else
		{
			var text = jq("#contacttextarea").val();
			var selectedtext = jq(this).val();
			var newtext = "";
			var textarray = text.match(/\S+/g); 
			for(var i = 0; i < textarray.length; i++){
    			if(!(textarray[i] == selectedtext))
				{
					newtext += textarray[i]+"  ";
				}
		}
			jq('#contacttextarea').val(newtext);
		}
	 });
  //info multitab
	jq("#apptab").click(function(){
		window.location.hash = "applications";
		jq("#infocontent3").show();
		jq("#infocontent,#infocontent2").hide();
		jq(this).addClass("selected");
		jq("#webtab,#brandtab").removeClass("selected");
	});
	jq("#webtab").click(function(){
		window.location.hash = "web";
		jq("#infocontent").show();
		jq("#infocontent3,#infocontent2").hide();
		jq(this).addClass("selected");
		jq("#apptab,#brandtab").removeClass("selected");
	});
	jq("#brandtab").click(function(){
		window.location.hash = "branding";
		jq("#infocontent2").show();
		jq("#infocontent3,#infocontent").hide();
		jq(this).addClass("selected");
		jq("#apptab,#webtab").removeClass("selected");
	});
	
	//contact requirement multitab
	jq("#capptab").click(function(){
		window.location.hash = "applications";
		jq("#contactcontent3").show();
		jq("#contactcontent,#contactcontent2").hide();
		jq(this).addClass("selected");
		jq("#cwebtab,#cbrandtab").removeClass("selected");
	});
	jq("#cwebtab").click(function(){
		window.location.hash = "web";
		jq("#contactcontent").show();
		jq("#contactcontent3,#contactcontent2").hide();
		jq(this).addClass("selected");
		jq("#capptab,#cbrandtab").removeClass("selected");
	});
	jq("#cbrandtab").click(function(){
		window.location.hash = "branding";
		jq("#contactcontent2").show();
		jq("#contactcontent3,#contactcontent").hide();
		jq(this).addClass("selected");
		jq("#capptab,#cwebtab").removeClass("selected");
	});
	
	jq("#iconsl,#iconso,#iconsb,#iconsa").hide();
	jq("#logogallery,#artgallery,#othersgallery,#bannergallery").hide();
	jq(".picon .picons.webiconevent").click(function(){
		window.location.hash = "web";
		jq("#iconsw,#webgallery").show(1000);
		jq("#iconsl,#iconso,#iconsb,#iconsa").hide();
		jq("#logogallery,#artgallery,#othersgallery,#bannergallery").hide();
	});
	jq(".picon .picons.logoiconevent").click(function(){
		window.location.hash = "logo";
		jq("#iconsl,#logogallery").show(1000);
		jq("#iconsw,#iconso,#iconsb,#iconsa").hide();
		jq("#webgallery,#artgallery,#othersgallery,#bannergallery").hide();
	});
	jq(".picon .picons.articonevent").click(function(){
		window.location.hash = "art";
		jq("#iconsa,#artgallery").show(1000);
		jq("#iconsl,#iconso,#iconsb,#iconsw").hide();
		jq("#webgallery,#logogallery,#othersgallery,#bannergallery").hide();
	});
	jq(".picon .picons.othersiconevent").click(function(){
		window.location.hash = "others";
		jq("#iconso,#othersgallery").show(1000);
		jq("#iconsl,#iconsw,#iconsb,#iconsa").hide();
		jq("#logogallery,#artgallery,#webgallery,#bannergallery").hide();
	});
	jq(".picon .picons.bannericonevent").click(function(){
		window.location.hash = "banner";
		jq("#iconsb,#bannergallery").show(1000);
		jq("#iconsl,#iconso,#iconsw,#iconsa").hide();
		jq("#logogallery,#artgallery,#webgallery,#othersgallery").hide();
	});
	
	var previd="1"; 
	jq(".light").unbind();
	jq("[class^=pbuttons]").click(function(Event) {
	if (jq(this).hasClass('dark')) {
	var before = ".img"+previd;
	var befbutton = ".bt"+previd;
	jq(befbutton).removeClass("selected");
	jq(this).addClass("selected");
	jq(before).removeClass("default");
    var id = jq(this).attr('pacannim_gallery_id');
	var after = ".img"+id;
	jq(after).addClass("default");
	previd=id;
	}});
	
	var lprevid="1"; 
	jq(".light").unbind();
	jq("[class^=lpbuttons]").click(function(Event) {
	if (jq(this).hasClass('dark')) {
	var before = ".limg"+lprevid;
	var befbutton = ".lbt"+lprevid;
	jq(befbutton).removeClass("selected");
	jq(this).addClass("selected");
	jq(before).removeClass("default");
    var id = jq(this).attr('pacannim_gallery_id');
	var after = ".limg"+id;
	jq(after).addClass("default");
	lprevid=id;
	}});
	
	var aprevid="1"; 
	jq(".light").unbind();
	jq("[class^=apbuttons]").click(function(Event) {
	if (jq(this).hasClass('dark')) {
	var before = ".aimg"+aprevid;
	var befbutton = ".abt"+aprevid;
	jq(befbutton).removeClass("selected");
	jq(this).addClass("selected");
	jq(before).removeClass("default");
    var id = jq(this).attr('pacannim_gallery_id');
	var after = ".aimg"+id;
	jq(after).addClass("default");
	aprevid=id;
	}});
	
	var oprevid="1"; 
	jq(".light").unbind();
	jq("[class^=obuttons]").click(function(Event) {
	if (jq(this).hasClass('dark')) {
	var before = ".oimg"+oprevid;
	var befbutton = ".obt"+oprevid;
	jq(befbutton).removeClass("selected");
	jq(this).addClass("selected");
	jq(before).removeClass("default");
    var id = jq(this).attr('pacannim_gallery_id');
	var after = ".oimg"+id;
	jq(after).addClass("default");
	oprevid=id;
	}});
	
	var bprevid="1"; 
	jq(".light").unbind();
	jq("[class^=bbuttons]").click(function(Event) {
	if (jq(this).hasClass('dark')) {
	var before = ".bimg"+bprevid;
	var befbutton = ".bbt"+bprevid;
	jq(befbutton).removeClass("selected");
	jq(this).addClass("selected");
	jq(before).removeClass("default");
    var id = jq(this).attr('pacannim_gallery_id');
	var after = ".bimg"+id;
	jq(after).addClass("default");
	bprevid=id;
	}});
	/*jq(window).mousemove(function(event) {
		if((event.pageY)<(windowHeight-80) && (event.pageX)<(windowWidth-120)){
    		jq("#preLoader").css({top: event.pageY, left: event.pageX});
		}
	});*/
	
	/*jq(".nav.bottom").click(function()
		{
		jq("#pcContent").hide(500);
		setTimeout(function(){
		window.location.href = 'info.html';
		},500);
		var bounceinterval = setInterval(function(){
			jq(".bouncepage").css("top",(bouncetopValue)+"px");
			bouncetopValue = bouncetopValue+(windowHeight/10);
			if(bouncetopValue > 0) {
				var bounceinterval2 = setInterval(function(){
				bouncetopValue = bouncetopValue-(windowHeight/70);
				jq(".bouncepage").css("top",(bouncetopValue)+"px");
				if(bouncetopValue < (-120)) {
					var bounceinterval3 = setInterval(function(){
					bouncetopValue = bouncetopValue+(windowHeight/100);
					jq(".bouncepage").css("top",(bouncetopValue)+"px");
					if(bouncetopValue > (-3)) {
						clearInterval(bounceinterval3);
					}
					}, 50);
					clearInterval(bounceinterval2);
				}
				}, 40);
				clearInterval(bounceinterval);
				bouncetopValue = 0;
			}
			}, 20);
	});*/
	
	//positioning logo loader based on screen size
	if(windowWidth>1399)
	{
		var logoLoaderPosition = ((topContentHeight/2)+87-20-180);
		jq(".logoLoader").css("margin-top",logoLoaderPosition);
		jq(".logoLoader").css("margin-left",(windowWidth/2)-95);
		jq("#textContent").css("margin-left",(windowWidth/2)-387);
		jq("#buttons .portfolio").css("margin-left",(windowWidth/2)-30-246);
    	jq("#textContent").css("margin-top","30px");
		jq(".nav.bottom").css("margin-left",(windowWidth/2)-132);
		//portfolio positioning
		jq(".PortfolioRect#others").css("margin-left",(windowWidth/2)-230);
		jq(".portfolioCircles#othersC").css("margin-left",(windowWidth/2)-230);
		jq(".PortfolioRect#others").css("top",745+"px");
		jq(".portfolioCircles#othersC").css("top",635+"px");
		jq(".mainicon").css("top",(windowHeight/2)-95+"px");
		jq(".mainicon").css("right",(windowWidth/2)-250+"px");
		jq(".subicon1").css("top",(windowHeight/2)-335+"px");
		jq(".subicon1").css("right",(windowWidth/2)-305+"px");
		jq(".subicon2").css("top",(windowHeight/2)-185+"px");
		jq(".subicon2").css("right",(windowWidth/2)-480+"px");
		jq(".subicon3").css("top",(windowHeight/2)+30+"px");
		jq(".subicon3").css("right",(windowWidth/2)-525+"px");
		jq(".subicon4").css("top",(windowHeight/2)+185+"px");
		jq(".subicon4").css("right",(windowWidth/2)-355+"px");
		jq(".buttoncontainer").css("right",(windowWidth/2)+175+"px");
		jq(".buttoncontainer").css("top",(windowHeight/2)-285+"px");
		jq(".imgcontainer").css("right",(windowWidth/2)+160+"px");
		jq(".imgcontainer").css("top",(windowHeight/2)+25+"px");
		
		//web
		jq(".PortfolioRect#web").css("margin-left",(windowWidth/2)-780);
		jq(".portfolioCircles#webC").css("margin-left",(windowWidth/2)-620);
		jq(".portfolioText.web").css("margin-left",(windowWidth/2)-540);
		//books
		jq(".PortfolioRect#book").css("right",(windowWidth/2)-780);
		jq(".portfolioCircles#bookC").css("right",(windowWidth/2)-620);
		//logo
		jq(".PortfolioRect#logo").css("margin-left",(windowWidth/2)-540);
		jq(".portfolioCircles#logoC").css("margin-left",(windowWidth/2)-680);
		jq(".portfolioText.logo").css("margin-left",(windowWidth/2)-630);
		//banner
		jq(".PortfolioRect#banner").css("right",(windowWidth/2)-540);
		jq(".portfolioCircles#bannerC").css("right",(windowWidth/2)-680);
		//displayimage
		jq("#displayImage").css("margin-left",(windowWidth/2)-210);
		//contactform
		jq("#contactform").css("margin-top",(windowHeight/2)-180);
			//creating variable for loading logo
		var clipLogo = 290;
		var percentage = 0;
		////loop for the loader to execute via css clip method
		var interval = setInterval(function(){
		jq("#midContent #logoLoaderfg").css("clip","rect("+clipLogo+"px, 290px, 290px, 0px)");
		clipLogo = clipLogo-1;
		if(clipLogo%3==0)
		{
			percentage = percentage+1;
		}
		if(percentage>99)
		{
			jq('#preLoader').hide(200);
		}
		if(percentage>20)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.3);
		}
		if(percentage>30)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.5);
		}
		if(percentage>50)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.6);
		}
		if(percentage>60)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.7);
		}
		if(percentage>80)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.9);
		}
		if(percentage>99)
		{
			jq(".home #nextPagenav,.home #buttons,.home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent,.home #navIcons,.home .nav.bottom").css("opacity",1);
			jq(".home #nextPagenav,.home #navIcons,.home #buttons,.home .nav.bottom").show(600);
		}
		jq('#preLoader').text(percentage+" %");
		if(clipLogo == -9)
		{
			clearInterval(interval);
		}
		},5);
		var clipPixels = 0;
		var righttoLeftLoader = windowWidth;
		var interval2 = setInterval(function(){
		jq("#bottomContent #runningPixels").css("clip","rect(0px, "+clipPixels+"px, 103px, 0px)");
		jq("#topLoader").css("clip","rect(0px, "+clipPixels+"px, 4px, 0px)");
		jq("#bottomLoader").css("clip","rect(0px, "+windowWidth+"px, 4px, "+righttoLeftLoader+"px)");
		clipPixels = clipPixels+windowWidth/290;
		righttoLeftLoader = righttoLeftLoader - windowWidth/290;
		if(clipPixels >= windowWidth+7)
		{
			clearInterval(interval2);
		}
		},5);
	}else if(windowWidth<1400 && windowWidth>1024)
	{
		var logoLoaderPosition = ((topContentHeight/2)+76-43-120);
		jq(".logoLoader").css("margin-top",logoLoaderPosition);
		jq(".logoLoader").css("margin-left",(windowWidth/2)-71);
		jq("#textContent").css("margin-left",(windowWidth/2)-312);
		jq("#buttons .portfolio").css("margin-left",(windowWidth/2)-30-214);
		jq("#textContent").css("margin-top","20px");
		jq(".nav.bottom").css("margin-left",(windowWidth/2)-113);
		
		jq(".mainicon").css("top",(windowHeight/2)-65+"px");
		jq(".mainicon").css("right",(windowWidth/2)-220+"px");
		jq(".subicon1").css("top",(windowHeight/2)-255+"px");
		jq(".subicon1").css("right",(windowWidth/2)-255+"px");
		jq(".subicon2").css("top",(windowHeight/2)-165+"px");
		jq(".subicon2").css("right",(windowWidth/2)-440+"px");
		jq(".subicon3").css("top",(windowHeight/2)+30+"px");
		jq(".subicon3").css("right",(windowWidth/2)-480+"px");
		jq(".subicon4").css("top",(windowHeight/2)+145+"px");
		jq(".subicon4").css("right",(windowWidth/2)-305+"px");
		jq(".buttoncontainer").css("right",(windowWidth/2)+155+"px");
		jq(".buttoncontainer").css("top",(windowHeight/2)-225+"px");
		jq(".imgcontainer").css("right",(windowWidth/2)+150+"px");
		jq(".imgcontainer").css("top",(windowHeight/2)+15+"px");
			//creating variable for loading logo
			//portfolio positioning
		jq(".PortfolioRect#others").css("margin-left",(windowWidth/2)-210);
		jq(".portfolioCircles#othersC").css("margin-left",(windowWidth/2)-210);
		jq(".PortfolioRect#others").css("top",615+"px");
		jq(".portfolioCircles#othersC").css("top",525+"px");
		//web
		jq(".PortfolioRect#web").css("margin-left",(windowWidth/2)-600);
		jq(".portfolioCircles#webC").css("margin-left",(windowWidth/2)-470);
		jq(".portfolioText.web").css("margin-left",(windowWidth/2)-395);
		//books
		jq(".PortfolioRect#book").css("right",(windowWidth/2)-600);
		jq(".portfolioCircles#bookC").css("right",(windowWidth/2)-470);
		//logo
		jq(".PortfolioRect#logo").css("margin-left",(windowWidth/2)-440);
		jq(".portfolioCircles#logoC").css("margin-left",(windowWidth/2)-560);
		jq(".portfolioText.logo").css("margin-left",(windowWidth/2)-520);
		//banner
		jq(".PortfolioRect#banner").css("right",(windowWidth/2)-440);
		jq(".portfolioCircles#bannerC").css("right",(windowWidth/2)-560);
		//displayimage
		jq("#displayImage").css("margin-left",(windowWidth/2)-185);
		//contactform
		jq("#contactform").css("margin-top",(windowHeight/2)-155);
		var clipLogo = 240;
		var percentage = 0;
		////loop for the loader to execute via css clip method
		var interval = setInterval(function(){
		jq("#midContent #logoLoaderfg").css("clip","rect("+clipLogo+"px, 240px, 240px, 0px)");
		clipLogo = clipLogo-1;
		if(clipLogo%3==0)
		{
			percentage = percentage+1.25;
		}
		if(percentage>99)
		{
			jq('#preLoader').hide(200);
		}
		if(percentage>20)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.3);
		}
		if(percentage>30)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.5);
		}
		if(percentage>50)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.6);
		}
		if(percentage>60)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.7);
		}
		if(percentage>80)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.9);
		}
		if(percentage>99)
		{
			jq(".home #nextPagenav,.home #buttons,.home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent,.home #navIcons,.home .nav.bottom").css("opacity",1);
			jq(".home #nextPagenav,.home #navIcons,.home #buttons,.home .nav.bottom").show(600);
		}
		jq('#preLoader').text(Math.round(percentage)+" %");
		if(clipLogo == -3)
		{
			clearInterval(interval);
		}
		},5);
		var clipPixels = 0;
		var righttoLeftLoader = windowWidth;
		var interval2 = setInterval(function(){
		jq("#bottomContent #runningPixels").css("clip","rect(0px, "+clipPixels+"px, 90px, 0px)");
		jq("#topLoader").css("clip","rect(0px, "+clipPixels+"px, 4px, 0px)");
		jq("#bottomLoader").css("clip","rect(0px, "+windowWidth+"px, 4px, "+righttoLeftLoader+"px)");
		clipPixels = clipPixels+windowWidth/240;
		righttoLeftLoader = righttoLeftLoader - windowWidth/240;
		if(clipPixels >= windowWidth+7)
		{
			clearInterval(interval2);
		}
		},5);
	}else if(windowWidth<1025)
	{
		var logoLoaderPosition = ((topContentHeight/2)+54-33-100);
		jq(".logoLoader").css("margin-top",logoLoaderPosition);
		jq(".logoLoader").css("margin-left",(windowWidth/2)-60);
		jq("#buttons .portfolio").css("margin-left",(windowWidth/2)-30-182);
    	jq("#textContent").css("margin-left",(windowWidth/2)-272);
    	jq("#textContent").css("margin-top","15px");
		jq(".nav.bottom").css("margin-left",(windowWidth/2)-100);
		
		
		jq(".mainicon").css("top",(windowHeight/2)-55+"px");
		jq(".mainicon").css("right",(windowWidth/2)-220+"px");
		jq(".subicon1").css("top",(windowHeight/2)-225+"px");
		jq(".subicon1").css("right",(windowWidth/2)-255+"px");
		jq(".subicon2").css("top",(windowHeight/2)-155+"px");
		jq(".subicon2").css("right",(windowWidth/2)-410+"px");
		jq(".subicon3").css("top",(windowHeight/2)+10+"px");
		jq(".subicon3").css("right",(windowWidth/2)-420+"px");
		jq(".subicon4").css("top",(windowHeight/2)+115+"px");
		jq(".subicon4").css("right",(windowWidth/2)-295+"px");
		jq(".buttoncontainer").css("right",(windowWidth/2)+115+"px");
		jq(".buttoncontainer").css("top",(windowHeight/2)-205+"px");
		jq(".imgcontainer").css("right",(windowWidth/2)+130+"px");
		jq(".imgcontainer").css("top",(windowHeight/2)+5+"px");
		
		//portfolio positioning
		jq(".PortfolioRect#others").css("margin-left",(windowWidth/2)-165);
		jq(".portfolioCircles#othersC").css("margin-left",(windowWidth/2)-165);
		jq(".PortfolioRect#others").css("top",520+"px");
		jq(".portfolioCircles#othersC").css("top",450+"px");
		//web
		jq(".PortfolioRect#web").css("margin-left",(windowWidth/2)-490);
		jq(".portfolioCircles#webC").css("margin-left",(windowWidth/2)-370);
		jq(".portfolioText.web").css("margin-left",(windowWidth/2)-320);
		//books
		jq(".PortfolioRect#book").css("right",(windowWidth/2)-490);
		jq(".portfolioCircles#bookC").css("right",(windowWidth/2)-370);
		//logo
		jq(".PortfolioRect#logo").css("margin-left",(windowWidth/2)-360);
		jq(".portfolioCircles#logoC").css("margin-left",(windowWidth/2)-480);
		jq(".portfolioText.logo").css("margin-left",(windowWidth/2)-440);
		//banner
		jq(".PortfolioRect#banner").css("right",(windowWidth/2)-360);
		jq(".portfolioCircles#bannerC").css("right",(windowWidth/2)-480);
		//displayimage
		jq("#displayImage").css("margin-left",(windowWidth/2)-150);
		//contactform
		jq("#contactform").css("margin-top",(windowHeight/2)-130);
			//creating variable for loading logo
		var clipLogo = 200;
		var percentage = 0;
		var righttoLeftLoader = windowWidth;
		////loop for the loader to execute via css clip method
		var interval = setInterval(function(){
		jq("#midContent #logoLoaderfg").css("clip","rect("+clipLogo+"px, 200px, 200px, 0px)");
		clipLogo = clipLogo-1;
		if(clipLogo%2==0)
		{
			percentage = percentage+1;
		}
		if(percentage>99)
		{
			jq('#preLoader').hide(200);
		}
		if(percentage>20)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.3);
		}
		if(percentage>30)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.5);
		}
		if(percentage>50)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.6);
		}
		if(percentage>60)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.7);
		}
		if(percentage>80)
		{
			jq(".home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent").css("opacity",0.9);
		}
		if(percentage>99)
		{
			jq(".home #nextPagenav,.home #buttons,.home .navigationtext,.home #navrect,.home #themeSelector,.home #textContent,.home #navIcons,.home .nav.bottom").css("opacity",1);
			jq(".home #nextPagenav,.home #navIcons,.home #buttons,.home .nav.bottom").show(600);
		}
		jq('#preLoader').text(percentage+" %");
		if(clipLogo == -1)
		{
			clearInterval(interval);
		}
		},5);
		var clipPixels = 0;
		var interval2 = setInterval(function(){
		jq("#bottomContent #runningPixels").css("clip","rect(0px, "+clipPixels+"px, 75px, 0px)");
		jq("#topLoader").css("clip","rect(0px, "+clipPixels+"px, 4px, 0px)");
		jq("#bottomLoader").css("clip","rect(0px, "+windowWidth+"px, 4px, "+righttoLeftLoader+"px)");
		clipPixels = clipPixels+windowWidth/200;
		righttoLeftLoader = righttoLeftLoader - windowWidth/200;
		if(clipPixels >= windowWidth+12)
		{
			clearInterval(interval2);
		}
		},5);
	}else
	{
		var logoLoaderPosition = ((topContentHeight/2)+76-43-120);
		jq(".logoLoader").css("margin-top",logoLoaderPosition);
		jq(".logoLoader").css("margin-left",(windowWidth/2)-71);
		jq("#textContent").css("margin-left",(windowWidth/2)-312);
		jq("#buttons .portfolio").css("margin-left",(windowWidth/2)-30-214);
		jq("#textContent").css("margin-top","20px");
		jq(".nav.bottom").css("margin-left",(windowWidth/2)-113);
		
		jq(".mainicon").css("top",(windowHeight/2)-65+"px");
		jq(".mainicon").css("right",(windowWidth/2)-220+"px");
		jq(".subicon1").css("top",(windowHeight/2)-255+"px");
		jq(".subicon1").css("right",(windowWidth/2)-255+"px");
		jq(".subicon2").css("top",(windowHeight/2)-165+"px");
		jq(".subicon2").css("right",(windowWidth/2)-440+"px");
		jq(".subicon3").css("top",(windowHeight/2)+30+"px");
		jq(".subicon3").css("right",(windowWidth/2)-480+"px");
		jq(".subicon4").css("top",(windowHeight/2)+145+"px");
		jq(".subicon4").css("right",(windowWidth/2)-305+"px");
		jq(".buttoncontainer").css("right",(windowWidth/2)+155+"px");
		jq(".buttoncontainer").css("top",(windowHeight/2)-225+"px");
		jq(".imgcontainer").css("right",(windowWidth/2)+150+"px");
		jq(".imgcontainer").css("top",(windowHeight/2)+15+"px");
			//creating variable for loading logo
			//portfolio positioning
		jq(".PortfolioRect#others").css("margin-left",(windowWidth/2)-165);
		jq(".portfolioCircles#othersC").css("margin-left",(windowWidth/2)-165);
		jq(".PortfolioRect#others").css("top",520+"px");
		jq(".portfolioCircles#othersC").css("top",450+"px");
		//web
		jq(".PortfolioRect#web").css("margin-left",(windowWidth/2)-490);
		jq(".portfolioCircles#webC").css("margin-left",(windowWidth/2)-370);
		jq(".portfolioText.web").css("margin-left",(windowWidth/2)-320);
		//books
		jq(".PortfolioRect#book").css("right",(windowWidth/2)-490);
		jq(".portfolioCircles#bookC").css("right",(windowWidth/2)-370);
		//logo
		jq(".PortfolioRect#logo").css("margin-left",(windowWidth/2)-360);
		jq(".portfolioCircles#logoC").css("margin-left",(windowWidth/2)-480);
		jq(".portfolioText.logo").css("margin-left",(windowWidth/2)-440);
		//banner
		jq(".PortfolioRect#banner").css("right",(windowWidth/2)-360);
		jq(".portfolioCircles#bannerC").css("right",(windowWidth/2)-480);
		//displayimage
		jq("#displayImage").css("margin-left",(windowWidth/2)-150);
			//creating variable for loading logo
		var clipLogo = 240;
		////loop for the loader to execute via css clip method
		var interval = setInterval(function(){
		jq("#midContent #logoLoaderfg").css("clip","rect("+clipLogo+"px, 240px, 240px, 0px)");
		clipLogo = clipLogo-1;
		if(clipLogo == -1)
		{
			clearInterval(interval);
		}
		},5);
		var clipPixels = 0;
		var righttoLeftLoader = windowWidth;
		var interval2 = setInterval(function(){
		jq("#bottomContent #runningPixels").css("clip","rect(0px, "+clipPixels+"px, 90px, 0px)");
		jq("#topLoader").css("clip","rect(0px, "+clipPixels+"px, 4px, 0px)");
		jq("#bottomLoader").css("clip","rect(0px, "+windowWidth+"px, 4px, "+righttoLeftLoader+"px)");
		clipPixels = clipPixels+windowWidth/240;
		righttoLeftLoader = righttoLeftLoader - windowWidth/240;
		if(clipPixels >= windowWidth+7)
		{
			clearInterval(interval2);
		}
		},5);
	}
});