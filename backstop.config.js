module.exports = {
	viewports: [
		{ name: 'laptop', width: 1280, height: 800 }
	],
	scenarios: [{
		label: 'Typography',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: ['#__bs_notify__'],
		selectors: ['#typography'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Blockquotes',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: ['#__bs_notify__'],
		selectors: ['#blockquotes'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Buttons',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: ['#__bs_notify__'],
		selectors: ['#buttons'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Lists',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: ['#__bs_notify__'],
		selectors: ['#lists'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Forms',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: ['#__bs_notify__'],
		selectors: ['#forms'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Tables',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: ['#__bs_notify__'],
		selectors: ['#tables'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Grids',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: ['#__bs_notify__'],
		selectors: ['#grids'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Codes',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: ['#__bs_notify__'],
		selectors: ['#codes'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}, {
		label: 'Utilities',
		url: 'http://localhost:3000',
		hideSelectors: [],
		removeSelectors: ['#__bs_notify__'],
		selectors: ['#utilities'],
		readyEvent: null,
		delay: 500,
		misMatchThreshold: 0.1,
		onReadyScript: null,
		onBeforeScript: null
	}],
	paths: {
		bitmaps_reference: '../../test/regression/reference',
		bitmaps_test: '.tmp',
		casper_scripts: null,
		compare_data: '.tmp/compare.json'
	},
	engine: 'phantomjs',
	report: ['browser', 'CLI'],
	casperFlags: [],
	debug: false,
	port: 3002
}
