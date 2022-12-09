const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@api": path.resolve(__dirname, "src/api"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@contexts": path.resolve(__dirname, "src/contexts"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@types": path.resolve(__dirname, "src/types"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@views": path.resolve(__dirname, "src/views"),
		},
	},
};
