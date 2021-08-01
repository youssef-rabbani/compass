/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

require(["js/qlik"], function (qlik) {
	window.qlik = qlik;
	
	qlik.setOnError( function (error) {
		console.log(error);
	});
		
		qlik.theme.apply('Tourism-theme').then(function(result) {

          if(result)

              console.log('theme applied!');

          else

              console.warn('could not apply theme!');

     });
  

	//callbacks -- inserted here --
	//open apps -- inserted here --
	

	var app20 = qlik.openApp('Industry Compass.qvf', config);

	var app21 = qlik.openApp('Overview-11.qvf', config);

	var app = qlik.openApp('Overview-12.qvf', config);

	app20.bookmark.apply('cc47e722-8aa6-49bb-9905-34fbb06c36ed');
	//app21.bookmark.apply('pPvpTN');
	
	
	
	//create cubes and lists -- inserted here --


	if (app20) {
			//get objects -- inserted here --
	app.getObject('QV-adv-19','GPYDFh');
	app.getObject('QV-s-e-5-j','ZqAnP');
	app.getObject('QV-s-c-5-h','Vcsswhh');
	app.getObject('QV-s-a-5-4-f','Jmn');
	app.getObject('QV-s-2-5-j','rnuZwmm');
	app.getObject('QV-s-2-5-h','mCMqaN');
	app.getObject('QV-s-2-5-4-f','umjqXr');
	app.getObject('QV-s-2-5-d','JGvam');
	app.getObject('QV-s-2-5-b','pxecyD');
	app.getObject('QV-s-2-5','gpvgPdE');
	app.getObject('QV-40','JZjfrj');
	app.getObject('QV-39','jLYwjN');
	app.getObject('QV-45','pXyXRr');
	app.getObject('QV-44','cfmvhgd');
	app20.getObject('QV-4-8','mPGCVJ');
	app20.getObject('QV-2-9c2','JLxJjs');
	app20.getObject('QV-1-1','cef2bf40-da2e-48c7-bd4f-048ec0d02f6c');
	app20.getObject('QV-4-3','mKJpfv');
	app20.getObject('QV-4-2','nSCLEtR');
	app20.getObject('QV-4-4a','GMjQAAQ');
	app20.getObject('QV-L44','CdCfpj');
	app20.getObject('QV-L43','aejDSJe');
	app20.getObject('QV-L42','SFfZj');
	app20.getObject('QV-L33','CdCfpj');
	app20.getObject('QV-L32','aejDSJe');
	app20.getObject('QV-L35','SFfZj');
	app20.getObject('QV-3-4','baCx');
	app20.getObject('QV-3-3','ZDMbuMR');
	app20.getObject('QV-3-2','dfhCju');
	app20.getObject('QV-2-4','PPZCkuV');
	app20.getObject('QV-2-3','jJpbmn');
	app20.getObject('QV-2-2','bJzrZs');
	app20.getObject('QV-L24','CdCfpj');
	app20.getObject('QV-L23','aejDSJe');
	app20.getObject('QV-L22','SFfZj');
	app20.getObject('QV-L14','CdCfpj');
	app20.getObject('QV-L13','aejDSJe');
	app20.getObject('QV-L12','SFfZj');
	app20.getObject('QV-1-4','FLWEZ');
	app20.getObject('QV-1-3','mfAasjJ');
	app20.getObject('QV-1-2','LqJLD');
	app20.getObject('QV-c-2-5-10','pzjUTk');
	app20.getObject('QV-c-2-5-11','Atdhmuw');
	
	app20.getObject('QV-c-2-5-9','PMjacPH');
	app20.getObject('QV-c-2-5-7','PdxSyf');
	app20.getObject('QV-c-2-5-5','jgFkLxg');
	app20.getObject('QV-c-2-5-8','HhUWGpE');
	app20.getObject('QV-c-2-5-6','UkchEf');
	app20.getObject('QV-c-2-5-4-1','jkmpasb');
	app20.getObject('QV-c-2-5-4','rwpAseZ');
	
	app20.getObject('QV-c-2-5-2','pUPXB');
	app20.getObject('QV-c-2-5a','QjwpH');
	app20.getObject('QV-c-2-5-3','JcaVvt');
	app20.getObject('QV-c-2-5-1','YsuqmPZ');
	app20.getObject('QV-c-2-5','caFcZG');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	app20.getObject('QV-1-6a2','sxbattb');
	app20.getObject('QV-1-5a2','wpJNMb');
	app21.getObject('QV-30','JvPqRs');
	app21.getObject('QV-29','CKQg');
	
	
	app21.getObject('QV-28','ECgr');
	app21.getObject('QV-27','CDXgC');
	app21.getObject('QV35','jpdcA');
	app21.getObject('QV36','SbZwgz');
	app21.getObject('QV32','kPpmtw');
	app21.getObject('QV34','TZXRPpn');
	app21.getObject('QV38','DaMgvP');
	app21.getObject('QV37','GPYDFh');
	
	
	
	
	app21.getObject('QV33','XYrJKL');
	app21.getObject('QV-31','qgYeqt');
	app20.getObject('QV-L11','a438b467-fb57-4a81-9cb1-8b3aa68c2cfa');
	
	
	
	
	
	
	
	
	
	
	app20.getObject('QV-L21','a438b467-fb57-4a81-9cb1-8b3aa68c2cfa');
	
	
	
	
	
	app20.getObject('QV-L31','a438b467-fb57-4a81-9cb1-8b3aa68c2cfa');
	
	
	
	
	
	app20.getObject('QV-L41','a438b467-fb57-4a81-9cb1-8b3aa68c2cfa');
	
	app20.getObject('QV-L55','CdCfpj');
	app20.getObject('QV-L54','aejDSJe');
	app20.getObject('QV-L53','SFfZj');
	app20.getObject('QV-L52','WFBdh');
	app20.getObject('QV-L51','a438b467-fb57-4a81-9cb1-8b3aa68c2cfa');
	
	
	
	
	app20.getObject('QV-2-5-10','80d44c19-8c33-48d5-8990-871d0db7d831');
	
	app20.getObject('QV-2-5-11','AmPu');
	app20.getObject('QV-b-2-5-11','PHvRvhv');
	app20.getObject('QV-4-7a','Atdhmuw');
	app20.getObject('QV-4-6a','DHJAe');
	app20.getObject('QV-4-5a','TPpfPr');
	app20.getObject('QV-b-2-5-9','PHvRvhv');
	app20.getObject('QV-b-2-5-7','PHvRvhv');
	app20.getObject('QV-b-2-5-5','PHvRvhv');
	app20.getObject('QV-b-2-5-4','PHvRvhv');
	app20.getObject('QV-b-2-5-2','PHvRvhv');
	app20.getObject('QV-b-2-5a','PHvRvhv');
	app20.getObject('QV-2-5-9','mCxvG');
	app20.getObject('QV-2-5-7','EzDnpm');
	app20.getObject('QV-2-5-5','JuddQU');
	app20.getObject('QV-2-5-4','ZKWpV');
	app20.getObject('QV-2-5-2','serUMxS');
	app20.getObject('QV-2-5a','XhmqK');
	
	app20.getObject('QV-b-2-5-10','vxQSgyT');
	
	app20.getObject('QV-b-2-5-6','UdWGUD');
	app20.getObject('QV-b-2-5-8','xWPjTGz');
	app20.getObject('QV-b-2-5-4-1','tmznV');
	app20.getObject('QV-b-2-5-3','RFZXRW');
	app20.getObject('QV-b-2-5-1','pSpcTm');
	app20.getObject('QV-b-2-5','WeAVF');
	app20.getObject('QV-1-8d','pcxAYR');
	app20.getObject('QV-1-8e','xZUHP');
	
	app20.getObject('QV-2-5-4-1','DnXfCyg');
	app20.getObject('QV-2-5-8','PBHUXmr');
	app20.getObject('QV-2-5-6','aEskYvs');
	
	app20.getObject('QV-1-8b','FDMUCAj');
	app20.getObject('QV-1-8a','jQjEXgc');
	app20.getObject('QV-2-6','DnXfCyg');
	app20.getObject('QV-2-5-3','FZpjsmp');
	app20.getObject('QV-2-5-1','JsLZLGx');
	app20.getObject('QV-2-5','GkmFw');
	
	
	
	
	
	
	
	
	
	
	
	
	app20.getObject('QV-4-9b','aZzYF');
	app20.getObject('QV-4-9a1','yXGpeg');
	app20.getObject('QV-4-6','sUjWFXr');
	app20.getObject('QV-4-7','pzjUTk');
	
	app20.getObject('QV-4-5','gykn');
	app20.getObject('QV-4-4b','uMPwa');
	
	
	
	
	
	app20.getObject('QV-4-1','FNrep');
	
	
	
	
	
	app20.getObject('QV-3-1','suyCrb');
	
	app20.getObject('QV-3-8','KXSHyY');
	app20.getObject('QV-3-9b','uAZPQp');
	app20.getObject('QV-3-9a1','EfeUP');
	
	app20.getObject('QV-3-7a','qgQxm');
	app20.getObject('QV-3-6a','qgQxm');
	app20.getObject('QV-3-5a','qgQxm');
	app20.getObject('QV-3-7','vxQSgyT');
	app20.getObject('QV-3-6','yzDEQm');
	app20.getObject('QV-3-5','vNFqn');
	app20.getObject('QV-2-8','gEbQT');
	
	
	app20.getObject('QV-2-9c','sJTqDmc');
	app20.getObject('QV-2-9b','PsmpPJ');
	app20.getObject('QV-2-9a','BkLpehL');
	
	app20.getObject('QV-1-5a1','KNGdADU');
	app20.getObject('QV-1-7a2','dmjeSC');
	app20.getObject('QV-1-7a1','pke');
	
	app20.getObject('QV-1-6a1','zwdHc');
	
	
	
	
	app20.getObject('QV-1-5b1','gqbEJ');
	app20.getObject('QV-1-6b1','YDmpmTh');
	app20.getObject('QV-1-7b1','pKXcq');
	app20.getObject('QV-1-6c1','jNkSM');
	app20.getObject('QV-1-5c1','HNRjHbR');
	app20.getObject('QV-1-7c1','DjJCbxp');
	
	
	
	
	
	
	app20.getObject('QV-2-1','6e7e00d3-9b1d-4c12-9247-124f156cafdc');
	app20.getObject('QV-2-7a','AmPu');
	app20.getObject('QV-2-6a','AmPu');
	app20.getObject('QV-2-7','SJPFATH');
	
	
	
	
	app21.getObject('QV-41','7b924f91-dbbd-4c38-847a-ebb8ee0f8010');
	
	
	app21.getObject('QV-43','LKHsf');
	
	
	
	
	
	
	
	
	
	$(".btn-round").click(function() {
			qlik.resize();
		});
		$(".PaperTitleItem").click(function() {
			qlik.resize();
		});
		$("a").click(function() {
			qlik.resize();
		});
	
app.getObject('CurrentSelections','CurrentSelections');
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
});
