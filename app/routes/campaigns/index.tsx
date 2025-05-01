import { useLoaderData } from "react-router";
import { Heading } from "~/components/heading";
import { Link } from "~/components/link";
import { mobilizehub, organizationId } from "~/mobilizehub";
import { pluralize } from "~/utils";

export function meta() {
	return [
		{ title: "Campaigns - Causes" },
		{ name: "description", content: "Empowering Citizen Engagement" },
	];
}

export async function loader() {
	const petitions = await mobilizehub.petition.list({
		organizationId,
	});

	if (petitions.error) {
		console.error("Error fetching petitions:", petitions.error);
		return { petitions: [] };
	}

	return { petitions: petitions.result.data };
}

export default function Index() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 ">
			<Heading>Campaigns</Heading>
			<p className="mt-2 max-w-2xl text-lg font-normal text-pretty sm:text-xl/8 text-gray-600 dark:text-gray-400">
				Join thousands of people standing up for transparency and accountability
				in politics by adding your name to our campaigns.
			</p>
			<CampaignList />
		</div>
	);
}

function CampaignList() {
	const loaderData = useLoaderData<typeof loader>();

	return (
		<section className="mt-8 md:mt-16">
			<div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
				{loaderData.petitions.map((campaign) => (
					<article
						key={campaign.id}
						className="flex flex-col items-start justify-between pb-6"
					>
						<div className="group relative">
							<div className="relative w-full">
								<img
									alt=""
									src={campaign.image?.url}
									className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
								/>
								<div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset dark:ring-gray-100/10" />
							</div>

							<h3 className="mt-4 text-xl/6 font-semibold text-sky-700 group-hover:text-sky-900 dark:text-sky-200 dark:group-hover:text-sky-100">
								<Link href={`/campaigns/${campaign.id}`}>
									<span className="absolute inset-0" />
									{campaign.title}
								</Link>
							</h3>

							<div className="mt-4">
								<div className="text-sm font-medium text-gray-900 text-nowrap dark:text-gray-100">
									{pluralize("signature", campaign.signatures)}
								</div>
								<div className="relative w-full">
									<div
										style={{
											width: `${Math.round(
												(campaign.signatures / campaign.goal) * 100,
											)}%`,
										}}
										className="absolute bg-green-500 w-full h-2 rounded-full z-50"
									/>
									<div className="mt-2 block h-2 w-full bg-zinc-200 rounded-full dark:bg-zinc-700" />
								</div>
							</div>

							<p className="mt-4 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">
								{campaign.description}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
