jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SET in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/hilti/set/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/hilti/set/test/integration/pages/App",
	"com/hilti/set/test/integration/pages/Browser",
	"com/hilti/set/test/integration/pages/Master",
	"com/hilti/set/test/integration/pages/Detail",
	"com/hilti/set/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.hilti.set.view."
	});

	sap.ui.require([
		"com/hilti/set/test/integration/MasterJourney",
		"com/hilti/set/test/integration/NavigationJourney",
		"com/hilti/set/test/integration/NotFoundJourney",
		"com/hilti/set/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});