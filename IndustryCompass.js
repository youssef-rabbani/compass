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



  app20.bookmark.apply("cc47e722-8aa6-49bb-9905-34fbb06c36ed");
  //app21.bookmark.apply('pPvpTN');

  $("data-qcmd").on("click", function () {
    var $element = $(this);
    switch ($element.data("qcmd")) {
      case "pg1":
        page1();
        break;
      case "pg2":
        page2();
        break;
      case "pg3":
        page3();
        break;
      case "pg4":
        page4();
        break;
      case "pg5":
        page5();
        break;
    }
  });
  page1();
  var models = [];
  function page1(){
	cleanup();
	app.getObject("QV-test", "GPYDFh").then(model =>{
		models.push(model);
	});
  }
  function cleanup(){
	  $.each(models, function(i, e){
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

  if (app20) {
    
    
   




    app.getObject("CurrentSelections", "CurrentSelections");
    $(".filter-drawer-toggle, paper-menu paper-item").click(function () {
      qlik.resize();
    });
  } else {
    $(".current-selections-placeholder span").css("display", "inline-block");
  }
});
