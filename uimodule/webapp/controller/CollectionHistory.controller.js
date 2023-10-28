sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"], function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("sapureZero.sapure.controller.App", {
        async onInit() {
            const table = this.getView().byId("tableId");
            table.setBusy(true);
            await fetch("http://localhost:3000/check_history")
                .then((response) => response.json())
                .then((data) => {
                    // Sort data by id
                    data.sort((a, b) => {
                        return a.id - b.id;
                    });
                    const oModel = new JSONModel({
                        collectionHistory: data,
                    });
                    this.getView().setModel(oModel);
                });
            table.setBusy(false);
        },
    });
});