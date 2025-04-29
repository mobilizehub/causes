import { MobilizeHub } from "@mobilizehub/api";

const API_KEY = process.env.MOBILIZEHUB_API_KEY;

if (!API_KEY) {
	throw new Error("MOBILIZEHUB_API_KEY is not set");
}

export const organizationId = process.env.MOBILIZEHUB_ORG_ID as string;

if (!organizationId) {
	throw new Error("MOBILIZEHUB_ORGANIZATION_ID is not set");
}

export const mobilizehub = new MobilizeHub({
	apiKey: API_KEY,
});
