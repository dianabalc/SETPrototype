sap.ui.define([
		"com/hilti/set/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("Number").length, 1, "The sorting by Number returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("Desc").length, 1, "The sorting by Desc returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("Number").length, 1, "The group by Number returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to Number if the user groupes by Number", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("Number");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "Number", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by Desc and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "Number");

		this.oGroupSortState.sort("Desc");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});