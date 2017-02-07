<cfcomponent displayname="Application" output="true">
	<cfset THIS.Name = "webpack" />

	<cffunction name="OnApplicationStart" access="public" returntype="boolean" output="true" hint="The onApplicationStart method executes when ColdFusion MX gets the first request for a page in the application after the server starts">

		<cfreturn true />
	</cffunction>

	<cffunction name="OnRequestStart" access="public" returntype="boolean" output="true" hint="ColdFusion always processes onRequestStart at the start of the request">
		<cfargument name="targetPage" type="string" required="true" />

		<cfif isdefined("URL.applicationstart")>
			<cfset temp = OnApplicationStart() />
		</cfif>

		<cfset REQUEST.env = "sfrc" /><!--- // this is the default --->

		<cfset serverArr = listtoarray(CGI.SERVER_NAME, ".") />

		<cfif serverArr[1] EQ "ag">
			<cfset REQUEST.env = "ag" />
		</cfif>

		<cfreturn true />
	</cffunction>
</cfcomponent>

