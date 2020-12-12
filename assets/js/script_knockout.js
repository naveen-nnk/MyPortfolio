// JavaScript Document
//Simple ViewModel
//INTRODUCTION
function SampleViewModel(){
	this.firstName=ko.observable("Naveen");
	this.lastName=ko.observable("kumar");
	this.fullName=ko.computed(function(){
		return this.firstName() +" " + this.lastName();
	},this);
	this.toCaps=function(){
		var tempName = this.lastName();
		this.lastName(tempName.toUpperCase());
	};
}


//LISTS AND COLLECTIONS
function crackerList(name,listofcrackers){
	var self = this;
	self.name = name;
	self.crackerbill = ko.observable(listofcrackers);

	self.formattedPrice = ko.computed(function(){
		var price = self.crackerbill().cost;
		return price ? "$" + price.toFixed(2) : "None"; 
	},this);
	
}


//LISTS AND COLLECTIONS
function crackerListingModel(){
	this.firstName=ko.observable("Naveen");
	this.lastName=ko.observable("kumar");
	this.fullName=ko.computed(function(){
		return this.firstName() +" " + this.lastName();
	},this);
	this.toCaps=function(){
		var tempName = this.lastName();
		this.lastName(tempName.toUpperCase());
	};
	var self = this;
	
	self.crackerList = [
						{crackername:"flowerpot",cost:300.121},
						{crackername:"chakra",cost:400},
						{crackername:"fancy",cost:500},
						{crackername:"giftbox",cost:600}
					   ];
					   
	self.passengerDetails = ko.observableArray([
				new crackerList("Naveen",self.crackerList[2]),
				new crackerList("Kumar",self.crackerList[0]),
				new crackerList("Menaga",self.crackerList[1]),
				new crackerList("NNK",self.crackerList[3])
	]);
	
	self.addCracker = function(){
		self.passengerDetails.push(new crackerList("",self.crackerList[0]));
	}
	
	self.removeCracker = function(cracker){
		self.passengerDetails.remove(cracker);
	}
	
	self.totalCost = ko.computed(function(){
		var total = 0;
		for(var i = 0;i < self.passengerDetails().length;i++)
		{
			total += self.passengerDetails()[i].crackerbill().cost;
		}
		return total;
	});
	
}

//Activating knockout.js
ko.applyBindings(new crackerListingModel());

//SINGLE PAGE APPLICATIONS// JavaScript Document