sap.ui.define(
    ["./BaseController", "sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sapureZero.sapure.controller.MainView", {
            onInit: async function () {
                 const oData = await fetch("http://localhost:3000/startCheck").then((response) => response.json())
                  .then((data) => {
                    return data.startCheck;
                  });

                  // Create a JSON model and set the data
                  const oModel = new JSONModel({
                    YourEntitySet: oData
                  });
                  this.getView().setModel(oModel);

                  // Bind the SmartTable to the entity set
                  const oSmartTable = this.getView().byId("smartTable");
                  oSmartTable.setEntitySet("YourEntitySet");

            }
        });
    },
);
