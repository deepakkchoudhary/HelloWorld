sap.ui.define([
	"com/acc/helloworldHelloWorld/controller/BaseController"
], function(BaseController) {
	"use strict";
	return BaseController.extend("com.acc.helloworldHelloWorld.controller.product.Product", {
		onInit: function() {
			var oRouter = this.getRouter();
			oRouter.getRoute("Product").attachPatternMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function(oEvent) {
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments").productId;
			oView = this.getView();
			//alert(oView);
			var path = "/Products/" + oArgs+"/";
			//alert(path);
			oView.bindElement({
				path: path,
				events: {
					change: this._onBindingChange.bind(this),
					dataRequested: function(oEvent) {
						oView.setBusy(true);
					},
					dataReceived: function(oEvent) {
						oView.setBusy(false);
					}
				}
			});
		},
		// _onObjectMatched: function(oEvent) {
		// 	this.getView().bindElement({
		// 		path: "/" + oEvent.getParameter("arguments").productId,
		// 		model: "product"
		// 	});
		// },
		_onBindingChange: function(oEvent) {
			// No data for the binding
			// No data for the binding
			if (!this.getView().getBindingContext()) {
				this.getRouter().getTargets().display("NotFound");
			}
		}

	});
});