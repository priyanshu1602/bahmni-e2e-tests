const {
    goto,
    $,
    click,
} = require('taiko');
var taikoHelper = require("util/taikoHelper");

step("Goto Clinical module", async function () {
    await goto(process.env.bahmniHome,{waitForNavigation:true,navigationTimeout:250000});
    await taikoHelper.repeatUntilNotFound($("#overlay"))
});

step("Goto Bahmni main home", async function() {
    await goto(process.env.bahmniHost,{waitForNavigation:true,navigationTimeout:250000});
});

step("Open <appName> app", async function (appName) {
	await click(appName,{waitForNavigation:true,navigationTimeout:250000});
    await taikoHelper.repeatUntilNotFound($("#overlay"))
});