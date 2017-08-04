sap.ui.define([
	"com/acc/helloworldHelloWorld/controller/BaseController"
], function(BaseController) {
	"use strict";
	return BaseController.extend("com.acc.helloworldHelloWorld.controller.product.Search", {
		onInit: function() {
			sap.ui.getCore().byId(this.createId("cDate")).setValue(new Date().toLocaleDateString());
		},
		onBack: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Home");
		},
		handleSearch: function(evt) {
			// create model filter
			var filters = [];
			var query = evt.getParameter("query");
			if (query && query.length > 0) {
				var filter = new sap.ui.model.Filter("Item_No", sap.ui.model.FilterOperator.Contains, query);
				filters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("prdList");
			var binding = list.getBinding("items");
			binding.filter(filters);
		},
		goToDetail: function(evt) {
			// var oModel = evt.getSource().getModel("product");
			// var oContext = evt.getSource().getBindingContext();
			// var selectedProductId = oModel.getProperty("Item_no", oContext);
			//--	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//	var selectedProductId = evt.getSource().getBindingContext().getProperty("Item_no");
			//--	oRouter.navTo("Product", {productId: evt.getSource().getBindingContext("product").getPath().substr(10)});
			var oItem, oCtx;
			oItem = evt.getSource();
			oCtx = oItem.getBindingContext("mod_product");
			this.getRouter().navTo("Product", {
				productId: oCtx.getPath().substr(10)
				//productId: oCtx.getProperty("Item_No")
			});
		},
		advaceSearch: function(evt) {
			var filters = [];
			var query = evt.getParameter("query");
			if (query && query.length > 0) {
				var filter = new sap.ui.model.Filter("Item_No", sap.ui.model.FilterOperator.Contains, query);
				filters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("prdList");
			var binding = list.getBinding("items");
			binding.filter(filters);
		}

		// myFunction: function(){
		// 	var date = new Date();
		// 	var txt = sap.ui.getCore().byId(this.createId("dt"));
		// 	txt.setText(date);
		// }
	});
});