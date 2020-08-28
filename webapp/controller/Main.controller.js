sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demoapp.controller.Main", {
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel();
			// oModel.setDefaultBindingMode("OneWay");
			oModel.loadData("model/localData/model.json ");
			this.getView().setModel(oModel);

		},
		onChange: function (oEvent) {
        var sPath= oEvent.getSource().getSelectedItem().getBindingContext().getPath();
        var oForm =this.getView().byId("sk");
        oForm.bindElement(sPath);
		},
		onselect:function(oMala){
		var oTab= oMala.getParameter("listItem").getBindingContext().getPath();
	    var oForm = this.getView().byId("sk");
	    oForm.bindElement(oTab);
		}

	});
});