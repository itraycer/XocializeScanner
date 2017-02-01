// JavaScript Document
CDV = ( typeof CDV == 'undefined' ? {} : CDV );
var cordova = window.cordova || window.Cordova;

CDV.XocializeScanner = {

	getBC: function(params,cb, bottomText) {
	  
	var settings = {
		
		PDF417Code		: true,
		QRCode			: true,
		EAN13Code		: true,
		UPCECode		: false,
		Code39Code		: false,
		Code39Mod43Code	: false,
		EAN8Code		: false,
		Code93Code		: false,
		Code128Code		: false,
		DataMatrix		: false,
		Interleaved2of5		: false,
		ITF14		: false,
		AztecCode		: false
		
	};
	
	for(var key in params) {
     
	    if(params.hasOwnProperty(key)) {
            settings[key] = params[key];
		}
	
	}
	
	var bcarray = [];
	
	for (var key in settings) {
	  if (settings.hasOwnProperty(key)) {
		  
		  if(settings[key]==true){
			  
			switch(key){
			
				case "UPCECode":
					bcarray.push('org.gs1.UPC-E');
				break;
				case "Code39Code":
					bcarray.push('org.iso.Code39');
				break;	
				case "Code39Mod43Code":
					bcarray.push('org.iso.Code39Mod4');
				break;	
				case "EAN13Code":
					bcarray.push('org.gs1.EAN-13');
				break;
				case "EAN8Code":
					bcarray.push('org.gs1.EAN-8');
				break;	
				case "Code93Code":
					bcarray.push('com.intermec.Code93');
				break;	
				case "Code128Code":
					bcarray.push('org.iso.Code128');
				break;	
				case "PDF417Code":
					bcarray.push('org.iso.PDF417');
				break;
				case "QRCode":
					bcarray.push('org.iso.QRCode');
				break;
				case "AztecCode":
					bcarray.push('org.iso.Aztec');
				break;
				case "DataMatrix":
					bcarray.push('org.iso.DataMatrix');
				break;
				case "Interleaved2of5":
					bcarray.push('org.ansi.Interleaved2of5');
				break;
				case "ITF-14":
					bcarray.push('org.gs1.ITF14');
				break;
			}
		  
		  }
		
		}
	}
	/// disable click through
	var disableClickThrough = function(){
		document.body.style.pointerEvents = 'none';
		document.body.style.userSelect = 'none';
	}
	/// enable click through
	var enableClickThrough = function(){
		document.body.style.pointerEvents = 'auto';
		document.body.style.userSelect = 'auto';
	}
	if(!bottomText){
        bottomText = "Scanning";
    }
	disableClickThrough();
	cordova.exec(function callback(data) {
                		enableClickThrough();
				if(typeof cb == 'function'){ cb.call(this,data); }
			},
			function errorHandler(err){
				console.warn(err);
				enableClickThrough();
			},'XocializeScanner','cordovaGetBC',[bcarray, bottomText]);
  }
	
}
