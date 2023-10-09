sap.ui.define(
    ["./BaseController", "sap/ui/model/json/JSONModel"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sapureZero.sapure.controller.MainView", {
            onInit: function () {
                const oData = [
                    {
                      ID: "4",
                      Name: "SAP Security Note Check Template",
                      Description: "Streamline SAP Security Note Checks",
                      CreatedBy: "fatih.aksoy@sapure.com",
                      NumberOfCollections: "2",
                    },
                    {
                      ID: "5",
                      Name: "Security Baseline Template",
                      Description: "SBT Check Collection Template - Validate Security Baseline Compliance",
                      CreatedBy: "fatih.aksoy@sapure.com",
                      NumberOfCollections: "1",
                    },
                    {
                      ID: "6",
                      Name: "SEC BASE ALL",
                      Description: "Security Baseline Template All",
                      CreatedBy: "christian.fuernsinn@sapure.com",
                      NumberOfCollections: "1",
                    }
                  ];

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
