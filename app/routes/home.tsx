import { useLoaderData } from "react-router";
import { Button } from "~/components/button";
import { Heading } from "~/components/heading";
import { Link } from "~/components/link";
import { mobilizehub, organizationId } from "~/mobilizehub";
import { pluralize } from "~/utils";

export function meta() {
	return [
		{ title: "Causes" },
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
		<main>
			<Hero
				title="Empowering Citizen Engagemnt"
				description="Join thousands of people standing up for transparency and accountability in politics."
			/>

			<CampaignList />
		</main>
	);
}

function Hero(props: {
	title: string;
	description: string;
	children?: React.ReactNode;
	post?: { text: string; href: string };
}) {
	return (
		<section className="bg-sky-800 py-16 md:py-32 relative isolate overflow-hidden dark:bg-sky-950">
			<svg
				aria-hidden="true"
				className="absolute inset-0 -z-10 size-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-white/10"
			>
				<defs>
					<pattern
						x="50%"
						y={-1}
						id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
						width={200}
						height={200}
						patternUnits="userSpaceOnUse"
					>
						<path d="M.5 200V.5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
					<title>Decorative element</title>
					<path
						d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
						strokeWidth={0}
					/>
				</svg>
				<rect
					fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
					width="100%"
					height="100%"
					strokeWidth={0}
				/>
			</svg>
			<div
				aria-hidden="true"
				className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
			>
				<div
					style={{
						clipPath:
							"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
					}}
					className="aspect-1108/632 w-[69.25rem] bg-linear-to-r from-sky-100 to-sky-600 opacity-20 dark:from-sky-900 dark:to-sky-800"
				/>
			</div>
			<div className="max-w-7xl mx-auto px-6 sm:px-8">
				<div className="max-w-2xl">
					{props.post && (
						<div>
							<a href={props.post.href} className="inline-flex space-x-6">
								<span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm/6 font-semibold text-sky-200 ring-1 ring-sky-500/20 ring-inset">
									What's new
								</span>
								<span className="inline-flex items-center space-x-2 text-sm/6 font-normal text-sky-100">
									<span>{props.post.text}</span>
									<span aria-hidden="true">&rarr;</span>
								</span>
							</a>
						</div>
					)}
					<h1 className="mt-7 text-5xl font-bold tracking-tight text-pretty text-zinc-100 sm:text-7xl">
						{props.title}
					</h1>
					<p className="mt-6 text-lg font-normal text-pretty text-zinc-200 sm:text-xl/8">
						{props.description}
					</p>
				</div>
				{props.children}
			</div>
		</section>
	);
}

function CampaignList() {
	const loaderData = useLoaderData<typeof loader>();

	return (
		<section className="max-w-7xl mx-auto px-6 sm:px-8 py-8 md:py-16">
			<Heading level={2}>Campaigns</Heading>
			<div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
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

			<Link href="/campaigns" className="w-full">
				<Button outline>
					View more <span>→</span>
				</Button>
			</Link>
		</section>
	);
}
