jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/hilti/set/test/integration/NavigationJourneyPhone",
		"com/hilti/set/test/integration/NotFoundJourneyPhone",
		"com/hilti/set/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});