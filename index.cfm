<html>
	<head>
		<title><cfoutput>#REQUEST.env#</cfoutput> - webpack yo</title>

		<link rel="stylesheet" href="dist/<cfoutput>#REQUEST.env#</cfoutput>/styles/styles.css" />

		<script src="dist/vendor/script/index.js"></script>
		<script src="dist/util/script/index.js"></script>
		<script src="dist/<cfoutput>#REQUEST.env#</cfoutput>/script/index.js"></script>
	</head>
	<body>
		<h1>webpack</h1>
		<p>REQUEST.env is <b><cfoutput>#REQUEST.env#</cfoutput></b>.</p>

		<div id="wrecked-angular" ng-app="WreckedApp" ng-cloak>
			<p ng-controller="WreckedAngularController">{{greeting}}</p>
			<p ng-controller="WreckedAngularController2">{{greeting}}</p>
		</div>
	</body>
</html>
