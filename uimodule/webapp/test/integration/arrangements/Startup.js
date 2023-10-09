sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("sapureZero.sapure.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "sapureZero.sapure",
                    async: true,
                    manifest: true,
                },
            });
        },
    });
});
