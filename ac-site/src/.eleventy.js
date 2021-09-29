const pluginBookshop = require("@bookshop/eleventy-bookshop");
const pluginCloudCannonBookshop = require("@bookshop/cloudcannon-eleventy-bookshop");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginBookshop({
		bookshopLocations: ["../../ac-components"]
	}));

	eleventyConfig.addPassthroughCopy('assets');

	eleventyConfig.cloudcannonOptions = {
		dir: {
			pages: 'pages'
		}
	};

	eleventyConfig.addPlugin(pluginCloudCannonBookshop);
};
