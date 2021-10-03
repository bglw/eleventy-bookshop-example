const pluginBookshop = require("@bookshop/eleventy-bookshop");
const pluginCloudCannonBookshop = require("@bookshop/cloudcannon-eleventy-bookshop");
const path = require('path');

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginBookshop({
		bookshopLocations: ["../../ac-components"]
	}));

	// passthroughCopy is relative to the CWD, so we need to use the path when on CloudCannon
	const assetPath = (input) =>  path.join(process.env['CC_ELEVENTY_INPUT'] || '', input);
	eleventyConfig.addPassthroughCopy(assetPath('assets'));
	eleventyConfig.addPassthroughCopy(assetPath('_cloudcannon'));

	eleventyConfig.cloudcannonOptions = {
		dir: {
			pages: 'pages'
		}
	};

	eleventyConfig.addPlugin(pluginCloudCannonBookshop);
};
