/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr(
	0,
	window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1
);

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:",
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl:
		(config.isSecure ? "https://" : "http://") +
		config.host +
		(config.port ? ":" + config.port : "") +
		config.prefix +
		"resources",
});

require(["js/qlik"], function (qlik) {
	window.qlik = qlik;

	qlik.setOnError(function (error) {
		console.log(error);
	});

	qlik.theme.apply("Tourism-theme").then(function (result) {
		if (result) console.log("theme applied!");
		else console.warn("could not apply theme!");
	});

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app1 = qlik.openApp('Industry Compass', config);

	//var app2 = qlik.openApp('094b74ac-2a8c-47cd-8162-3264e4ca5331', config);

	var app2 = qlik.openApp('9f149e29-04fe-4697-b8ae-e989e185764c', config);

	app1.bookmark.apply('cc47e722-8aa6-49bb-9905-34fbb06c36ed');

	//app21.bookmark.apply('pPvpTN');

	$("[data-qcmd]").on("click", function () {
		var $element = $(this);
		switch ($element.data("qcmd")) {
			case "pg1":
				setTimeout(function(){ qlik.resize(); }, 1000);
				page1();
				break;
			case "pg2":
				setTimeout(function(){ qlik.resize(); }, 1000);
				page2();
				qlik.resize();
				break;
			case "pg3":
				setTimeout(function(){ qlik.resize(); }, 1000);
				page3();
				qlik.resize();
				break;
			case "pg4":
				setTimeout(function(){ qlik.resize(); }, 1000);
				page4();
				qlik.resize();
				break;
			case "pg5":
				setTimeout(function(){ qlik.resize(); }, 1000);
				page5();
				break;
		}
	});
	page1();
	var models = [];
	function page1() {
		cleanup();
		app1.getObject('QV-1-8e', 'xZUHP').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-8d', 'pcxAYR').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-8a', 'jQjEXgc').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-8b', 'FDMUCAj').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-7c1', 'DjJCbxp').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-6c1', 'jNkSM').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-5c1', 'HNRjHbR').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-7b1', 'pKXcq').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-6b1', 'YDmpmTh').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-5b1', 'gqbEJ').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-7a2', 'dmjeSC').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-6a2', 'sxbattb').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-5a2', 'wpJNMb').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-7a1', 'pke').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-6a1', 'zwdHc').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-5a1', 'KNGdADU').then(model => {
			models.push(model);
		});
		app1.getObject('QV-refresh-1', 'LEtj').then(model => {
			models.push(model);
		});
		app1.getObject('QV-clear-1', 'RuQmRAM').then(model => {
			models.push(model);
		});
		app1.getObject('QV-L14', 'CdCfpj').then(model => {
			models.push(model);
		});
		app1.getObject('QV-L13', 'aejDSJe').then(model => {
			models.push(model);
		});
		app1.getObject('QV-L12', 'SFfZj').then(model => {
			models.push(model);
		});
		app1.getObject('QV-L11', 'ArFr').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-4', 'FLWEZ').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-3', 'mfAasjJ').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-2', 'LqJLD').then(model => {
			models.push(model);
		});
		app1.getObject('QV-1-1', 'wHEpBKM').then(model => {
			models.push(model);
		});
		app1.getObject("QV-test", "GPYDFh").then(model => {
			models.push(model);
		});
	}


	function page2() {
		cleanup();
		app1.getObject('QV-refresh-2', 'LEtj').then(model => {
			models.push(model);
		});
		app1.getObject('QV-clear-2', 'RuQmRAM').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-9c2', 'JLxJjs').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-9c', 'sJTqDmc').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-9b', 'PsmpPJ').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-9a', 'BkLpehL').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-8', 'gEbQT').then(model => {
			models.push(model);
		});
		app1.getObject('QV-dream-5-5', 'AmPu').then(model => {
			models.push(model);
		});
		app1.getObject('QV-dream-5-9', 'kLmjDB').then(model => {
			models.push(model);
		});
		app1.getObject('QV-dream-5-7', 'fQBPP').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-5-9', 'mCxvG').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-5-7', 'EzDnpm').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-5-5', 'JuddQU').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-5-4', 'ZKWpV').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-5-2', 'serUMxS').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-5a', 'XhmqK').then(model => {
			models.push(model);
		});
		app1.getObject('QV-dream-5-8', 'JWwPwJv').then(model => {
			models.push(model);
		});
		app1.getObject('QV-dream-5-6', 'LHDMZr').then(model => {
			models.push(model);
		});
		app1.getObject('QV-dream-5-4-1', 'LfPGjsc').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-5-1', 'JsLZLGx').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-5-3', 'FZpjsmp').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-5-8', 'PBHUXmr').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-5-6', 'aEskYvs').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-5-4-1', 'DnXfCyg').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-5', 'GkmFw').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-4', 'PPZCkuV').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-3', 'jJpbmn').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-2', 'bJzrZs').then(model => {
			models.push(model);
		});
		app1.getObject('QV-2-1', 'EPtmpPL').then(model => {
			models.push(model);
		});
		app1.getObject('QV-L24', 'CdCfpj').then(model => {
			models.push(model);
		});
		app1.getObject('QV-L23', 'aejDSJe').then(model => {
			models.push(model);
		});
		app1.getObject('QV-L22', 'SFfZj').then(model => {
			models.push(model);
		});
		app1.getObject('QV-L21', 'ArFr').then(model => {
			models.push(model);
		});
	}


	function page3() {
		cleanup();
	app1.getObject('QV-refresh-3','LEtj').then(model => {
		models.push(model);
	})
	app1.getObject('QV-clear-3','RuQmRAM').then(model => {
		models.push(model);
	});
	app1.getObject('QV-b-2-5-5','WbkPzBe').then(model => {
		models.push(model);
	});
	app1.getObject('QV-3-9b','uAZPQp').then(model => {
		models.push(model);
	});
	app1.getObject('QV-3-8','KXSHyY').then(model => {
		models.push(model);
	});
	app1.getObject('QV-3-9a1','EfeUP').then(model => {
		models.push(model);
	});
	app1.getObject('QV-book-2-5-4-1','vxQSgyT').then(model => {
		models.push(model);
	});
	app1.getObject('QV-book-2-5-5','WbkPzBe').then(model => {
		models.push(model);
	});
	app1.getObject('QV-b-2-5-4','PHvRvhv').then(model => {
		models.push(model);
	});
	app1.getObject('QV-b-2-5-2','wRjXHPd').then(model => {
		models.push(model);
	});
	app1.getObject('QV-b-2-5a','GLtjDp').then(model => {
		models.push(model);
	});
	app1.getObject('QV-b-2-5-4-1','tmznV').then(model => {
		models.push(model);
	});
	app1.getObject('QV-b-2-5-3','RFZXRW').then(model => {
		models.push(model);
	});
	app1.getObject('QV-b-2-5-1','pSpcTm').then(model => {
		models.push(model);
	});
	app1.getObject('QV-b-2-5','WeAVF').then(model => {
		models.push(model);
	});
	app1.getObject('QV-3-1','suyCrb').then(model => {
		models.push(model);
	});
	app1.getObject('QV-L33','CdCfpj').then(model => {
		models.push(model);
	});
	app1.getObject('QV-L32','aejDSJe').then(model => {
		models.push(model);
	});
	app1.getObject('QV-L35','SFfZj').then(model => {
		models.push(model);
	});
	app1.getObject('QV-L31','ArFr').then(model => {
		models.push(model);
	});	
	app1.getObject('QV-3-4','baCx').then(model => {
		models.push(model);
	});
	app1.getObject('QV-3-3','ZDMbuMR').then(model => {
		models.push(model);
	});
	app1.getObject('QV-3-2','dfhCju').then(model => {
		models.push(model);
	});
	}

	function page4() {
		cleanup();
	app1.getObject('QV-L44','CdCfpj').then(model => {
		models.push(model);
	});
	app1.getObject('QV-L43','aejDSJe').then(model => {
		models.push(model);
	});
	app1.getObject('QV-L42','SFfZj').then(model => {
		models.push(model);
	});
	app1.getObject('QV-L41','ArFr').then(model => {
		models.push(model);
	});
	app1.getObject('QV-refresh-4','LEtj').then(model => {
		models.push(model);
	});
	app1.getObject('QV-clear-4','RuQmRAM').then(model => {
		models.push(model);
	});
	app1.getObject('QV-4-9b','aZzYF').then(model => {
		models.push(model);
	}); 
	app1.getObject('QV-4-8','mPGCVJ').then(model => {
		models.push(model);
	});
	app1.getObject('QV-4-9a1','yXGpeg').then(model => {
		models.push(model);
	});
	app1.getObject('QV-c-2-5-9','PMjacPH').then(model => {
		models.push(model);
	});
	app1.getObject('QV-c-2-5-7','PdxSyf').then(model => {
		models.push(model);
	});
	app1.getObject('QV-c-2-5-5','jgFkLxg').then(model => {
		models.push(model);
	});
	app1.getObject('QV-c-2-5-4','rwpAseZ').then(model => {
		models.push(model);
	});
	app1.getObject('QV-c-2-5-2','pUPXB').then(model => {
		models.push(model);
	});
	app1.getObject('QV-c-2-5a','QjwpH').then(model => {
		models.push(model);
	});
	app1.getObject('QV-spend-2-5-3','VYpqepT').then(model => {
		models.push(model);
	});
	app1.getObject('QV-spend-2-5-1','jvPVNW').then(model => {
		models.push(model);
	});
	app1.getObject('QV-spend-2-5-10','ArSe').then(model => {
		models.push(model);
	});
	app1.getObject('QV-c-2-5-8','HhUWGpE').then(model => {
		models.push(model);
	});
	app1.getObject('QV-c-2-5-6','UkchEf').then(model => {
		models.push(model);
	});
	app1.getObject('QV-c-2-5-4-1','jkmpasb').then(model => {
		models.push(model);
	});
	app1.getObject('QV-c-2-5-3','JcaVvt').then(model => {
		models.push(model);
	});
	app1.getObject('QV-c-2-5-1','YsuqmPZ').then(model => {
		models.push(model);
	});	
	app1.getObject('QV-c-2-5','caFcZG').then(model => {
		models.push(model);
	});
	app1.getObject('QV-4-3','mKJpfv').then(model => {
		models.push(model);
	});
	app1.getObject('QV-4-2','nSCLEtR').then(model => {
		models.push(model);
	});
	app1.getObject('QV-4-4a','GMjQAAQ').then(model => {
		models.push(model);
	});
	app1.getObject('QV-4-1','FNrep').then(model => {
		models.push(model);
	});
	}

	function page5() {
		cleanup();
	app2.getObject('QV-40','JZjfrj').then(model => {
		models.push(model);
	});
	app2.getObject('QV-39','jLYwjN').then(model => {
		models.push(model);
	});
	app2.getObject('QV-45','pXyXRr').then(model => {
		models.push(model);
	});
	app2.getObject('QV-44','cfmvhgd').then(model => {
		models.push(model);
	});
	app2.getObject('QV-adv-19','GPYDFh').then(model => {
		models.push(model);
	});
	app2.getObject('QV-refresh-5','YQYXuvB').then(model => {
		models.push(model);
	});
	app2.getObject('QV-clear-5','mKEVXm').then(model => {
		models.push(model);
	});
	app2.getObject('QV-L54','DjypVU').then(model => {
		models.push(model);
	});
	app2.getObject('QV-L53','ugLpp').then(model => {
		models.push(model);
	});
	app2.getObject('QV-L52','JPPndkk').then(model => {
		models.push(model);
	});
	app2.getObject('QV-L51','PmbtFL').then(model => {
		models.push(model);
	});
	app2.getObject('QV-30','JvPqRs').then(model => {
		models.push(model);
	});
	app2.getObject('QV-29','CKQg').then(model => {
		models.push(model);
	});
	app2.getObject('QV-28','ECgr').then(model => {
		models.push(model);
	});	
	app2.getObject('QV-27','CDXgC').then(model => {
		models.push(model);
	});
	app2.getObject('QV-adv-20','DaMgvP').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-f-5-k','xTJmw').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-d-5-1','JPbfZ').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-b-5-g','WhUsnsh').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-2-5-k','mjVH').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-2-5-1','SUpQwC').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-2-5-g','JgmFYSE').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-2-5-e','NNnXERC').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-2-5-c','VuTYt').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-2-5-a','aarZTFj').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-e-5-j','ZqAnP').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-c-5-h','Vcsswhh').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-a-5-4-f','Jmn').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-2-5-j','rnuZwmm').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-2-5-h','mCMqaN').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-2-5-4-f','umjqXr').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-2-5-d','JGvam').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-2-5-b','pxecyD').then(model => {
		models.push(model);
	});
	app2.getObject('QV-s-2-5','gpvgPdE').then(model => {
		models.push(model);
	});
	}








	function cleanup() {
		$.each(models, function (i, e) {
			e.close();
		});
		models = [];
	}
	//create cubes and lists -- inserted here --

	$(".btn-round").click(function () {
		qlik.resize();
	});
	
	$(".PaperTitleItem").click(function () {
		qlik.resize();
	});
	$("a").click(function () {
		qlik.resize();
	});

	if (app1) {







		app1.getObject("CurrentSelections", "CurrentSelections");
		$(".filter-drawer-toggle, paper-menu paper-item").click(function () {
			qlik.resize();
		});
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
});
