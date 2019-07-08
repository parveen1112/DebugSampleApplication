const article = ({ ssrHtml, manifest, preLoadedStateForClient, seoInfo = {} }) => (`
<html>
	<head>
		<title>Debug Sample Application</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0">
		<meta name="format-detection" content="telephone=no">
		<meta name="theme-color" content="#000">
		<link rel="shortcut icon" href="https://static11.jassets.com/live/images/favicon.ico">
		<link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
		<link href="${manifest['main.css']}" rel="stylesheet">
	</head>
	<body>
		<section id="app-root">${ssrHtml}</section>
		<script>window.PRELOADED_STATE = ${preLoadedStateForClient}</script>
		<script src="${manifest['main.js']}" async></script>
	</body>
</html>
`);

module.exports = article;
