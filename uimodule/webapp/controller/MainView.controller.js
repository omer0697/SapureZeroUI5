sap.ui.define(
    ["./BaseController", "sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sapureZero.sapure.controller.MainView", {
            onInit: async function () {
              // busy indicator for smart table id = smartTable
                const oSmartTable = this.getView().byId("smartTableStartCheck");
                const table= this.getView().byId("table");
                table.setBusy(true)
                // get data from backend
                 const oData = await fetch("http://localhost:3000/startCheck").then((response) => response.json())
                  .then((data) => {
                    return data.startCheck;
                  });
                  // Create a JSON model and set the data
                  const oModel = new JSONModel({
                    startCheck: oData
                  });
                  // Set the model on the view
                  this.getView().setModel(oModel);
                  // Bind the SmartTable to the entity set
                  oSmartTable.setEntitySet("startCheck");
                  //  remove busy indicator
                  table.setBusy(false);

            }
        });
    },
);
