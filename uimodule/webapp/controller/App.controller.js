sap.ui.define(["sap/ui/core/mvc/Controller"], function (BaseController) {
    "use strict";

    return BaseController.extend("sapureZero.sapure.controller.App", {
        onInit() {},
        onSideNavButtonPress: function() {
			const oNavigationList = this.byId("navigationList");
			const bExpanded = oNavigationList.getExpanded();

			oNavigationList.setExpanded(!bExpanded);
		},
        routingToCollectionHistory: function() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("checkhistory");
        },
    });
});
