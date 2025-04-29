import {
	type RouteConfig,
	index,
	layout,
	route,
} from "@react-router/dev/routes";

export default [
	layout("./layout/stacked-layout.tsx", [
		index("routes/home.tsx"),
		route("signup", "routes/signup.tsx"),
		route("privacy", "routes/privacy.tsx"),
	]),
] satisfies RouteConfig;
