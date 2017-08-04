sap.ui.define([
	"com/acc/helloworldHelloWorld/controller/BaseController"
], function(BaseController) {
	"use strict";
	var count = 0;
	return BaseController.extend("com.acc.helloworldHelloWorld.controller.Home", {
		// onInit:function(){
		// },
		myFunction: function() {
			var date = new Date();
			var txt = sap.ui.getCore().byId(this.createId("dt"));
			txt.setText(date);
		},
		goToSearch: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Search");
		},
		switchBulb: function() {
			var img = sap.ui.getCore().byId(this.createId("bulb"));
			var btn = sap.ui.getCore().byId(this.createId("light"));
			if (count % 2 == 0) {
				img.setSrc("./img/pic_bulbon.gif");
				btn.setText("Off");
				count = 1;
			} else {
				img.setSrc("./img/pic_bulboff.gif");
				btn.setText("On");
				count = 0;
			}
		},
		rowAdd: function() {
			//	var adR = sap.ui.getCore().byId(this.createId("addR"));
			var tab = sap.ui.getCore().byId(this.createId("tab"));
			//	var c1 = sap.ui.getCore().byId(this.createId("c1"));

			var cList = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Input({
						value: ""
					}),
					new sap.m.Input({
						value: ""
					}),
					new sap.m.Input({
						value: ""
					}),
					new sap.m.Input({
						value: ""
					}),
					new sap.m.Input({
						value: ""
					})
				]
			});
			tab.addItem(cList);
		}

	});
});