import { PortableText, type PortableTextBlock } from "@portabletext/react";
import clsx from "clsx";
import React from "react";
import {
	type ActionFunctionArgs,
	Form,
	type LoaderFunctionArgs,
	type MetaFunction,
	useActionData,
	useLoaderData,
	useLocation,
	useNavigation,
} from "react-router";
import { dataWithSuccess } from "remix-toast";
import { z } from "zod";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumList,
} from "~/components/breadcrumb";
import { Button } from "~/components/button";
import { Field, FieldGroup, Label } from "~/components/field";
import { Heading } from "~/components/heading";
import {
	BlueskyIcon,
	FacebookIcon,
	LinkedInIcon,
	XIcon,
} from "~/components/icons";
import { Input } from "~/components/input";
import { Separator } from "~/components/seperator";
import { Strong, Text, TextLink } from "~/components/text";
import { mobilizehub, organizationId } from "~/mobilizehub";
import { pluralize } from "~/utils";

export async function loader(args: LoaderFunctionArgs) {
	const campaignId = args.params.campaignId;

	if (!campaignId) {
		throw new Error("Campaign ID is required");
	}

	const { result, error } = await mobilizehub.petition.get({
		organizationId: organizationId,
		petitionId: campaignId,
	});

	if (error) {
		throw new Error("Campaign not found");
	}

	const url = args.request.url;

	return {
		campaign: result.data,
		url,
	};
}

export const meta: MetaFunction<typeof loader> = (args) => {
	return [
		{
			title: `${args.data?.campaign.name} - Cause`,
			description: args.data?.campaign.description,
		},
		{ property: "og:image", content: args.data?.campaign.image?.url },
		{ property: "og:image:width", content: "1200" },
		{ property: "og:image:height", content: "630" },
	];
};

export default function Index() {
	const loaderData = useLoaderData<typeof loader>();
	const [showMore, setShowMore] = React.useState(false);
	const actionData = useActionData<typeof action>();

	return (
		<main className="py-8 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
			<Breadcrumb className="">
				<BreadcrumList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbSeparator />

					<BreadcrumbItem>
						<BreadcrumbLink href="/campaigns">Campaigns</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbSeparator />

					<BreadcrumbItem current>
						<BreadcrumbLink href="/components">
							{loaderData.campaign.title}
						</BreadcrumbLink>
					</BreadcrumbItem>
				</BreadcrumList>
			</Breadcrumb>

			<div className="mt-8 flex flex-col md:flex-row gap-6 md:gap-16 relative h-full">
				{/** Content */}
				<div className="md:w-1/2 flex flex-col">
					<Heading>{loaderData.campaign.title}</Heading>

					<p className="mt-4 text-zinc-500 text-base/7 dark:text-zinc-400">
						{loaderData.campaign.description}
					</p>

					<div className="mt-6">
						<figure className="h-60 md:h-96 relative">
							<img
								alt={loaderData.campaign.image?.alt}
								src={loaderData.campaign.image?.url}
								className="w-full object-top-left object-cover h-full lg:object-center rounded-2xl bg-gray-100"
							/>
						</figure>
					</div>
					<div
						className={clsx(
							"mt-6 prose md:line-clamp-none transition-all duration-300 ease-in-out dark:prose-invert",
							showMore ? "line-clamp-none" : "line-clamp-3",
						)}
					>
						<PortableText
							value={
								loaderData.campaign
									.content as unknown as Array<PortableTextBlock>
							}
							components={{
								block: {
									h1: ({ children }) => <h1>{children}</h1>,
									h2: ({ children }) => <h2>{children}</h2>,
									h3: ({ children }) => <h3>{children}</h3>,
									h4: ({ children }) => <h4>{children}</h4>,
									h5: ({ children }) => <h5>{children}</h5>,
									h6: ({ children }) => <h6>{children}</h6>,
									p: ({ children }) => <p>{children}</p>,
								},
								marks: {
									link: ({ children, value }) => {
										const { href } = value;
										return (
											<TextLink
												href={href}
												target="_blank"
												rel="noopener noreferrer"
											>
												{children}
											</TextLink>
										);
									},
									blockquote: ({ children }) => {
										return <blockquote>{children}</blockquote>;
									},
								},
							}}
						/>
					</div>
					<Button
						outline
						className={clsx("mt-4 w-full", "block md:hidden")}
						onClick={() => setShowMore(!showMore)}
					>
						{showMore ? "Read less" : "Read more"}
					</Button>
				</div>

				{/** Form */}
				<div className="md:w-1/2 p-8 border rounded-xl border-black/10 sticky h-fit top-8 dark:border-zinc-700">
					<div className="flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-5 w-5 text-zinc-500 dark:text-zinc-400"
						>
							<title>Sign</title>
							<rect width="8" height="4" x="8" y="2" rx="1" />
							<path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" />
							<path d="M16 4h2a2 2 0 0 1 1.73 1" />
							<path d="M8 18h1" />
							<path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
						</svg>
						<p className="text-base/7 font-semibold text-zinc-700 dark:text-zinc-400">
							Sign the petition
						</p>
					</div>
					<Heading level={5} className="mt-4">
						{loaderData.campaign.target}
					</Heading>
					<Text className="mt-4">{loaderData.campaign.ask}</Text>
					<div className="mt-6">
						<div className="text-sm font-medium text-gray-900 text-nowrap dark:text-gray-400">
							{pluralize("signature", loaderData.campaign.signatures)}
						</div>
						<div className="relative w-full">
							<div
								style={{
									width: `${Math.round(
										(loaderData.campaign.signatures /
											loaderData.campaign.goal) *
											100,
									)}%`,
								}}
								className="absolute bg-green-500 w-full h-2 rounded-full z-50"
							/>
							<div className="mt-2 block h-2 w-full bg-zinc-200 rounded-full" />
						</div>
					</div>
					<Separator orientation="horizontal" className="w-full my-6" />
					{actionData?.success ? <FormSuccess /> : <CampaignForm />}{" "}
				</div>
			</div>

			<div className="mt-6 md:mt-16 flex items-center justify-between px-2 md:px-0">
				<Text>
					<Strong>Share this page</Strong>
				</Text>

				<div className="flex items-center gap-2">
					<Button plain>
						<FacebookIcon data-slot="icon" />
					</Button>

					<Button plain>
						<XIcon data-slot="icon" />
					</Button>

					<Button plain>
						<LinkedInIcon data-slot="icon" />
					</Button>

					<Button plain>
						<BlueskyIcon data-slot="icon" />
					</Button>
				</div>
			</div>
		</main>
	);
}

function CampaignForm() {
	const navigation = useNavigation();
	const pending = navigation.state === "submitting";

	return (
		<Form method="post" className="mt-4 flex w-full max-w-lg flex-col gap-8">
			<FieldGroup>
				<Field>
					<Label>Email</Label>
					<Input name="email" placeholder="Enter your email" type="email" />
				</Field>

				<Field>
					<Label>First name</Label>
					<Input name="first_name" placeholder="Enter your first name" />
				</Field>

				<Field>
					<Label>Last name</Label>
					<Input name="last_name" placeholder="Enter your last name" />
				</Field>
			</FieldGroup>

			<Button type="submit" className="w-full" disabled={pending}>
				{pending ? "Please wait..." : "Sign the petition"}
			</Button>

			<Text>
				By signing this petition you agree to recieve updates about this
				campaign and others. Read more about how we use your data in our{" "}
				<TextLink href="/privacy">Privacy Notice</TextLink>. You can unsubscribe
				at any time.
			</Text>
		</Form>
	);
}

function FormSuccess() {
	const loaderData = useLoaderData<typeof loader>();

	return (
		<div className="mt-4 flex w-full max-w-lg flex-col gap-8">
			<Heading level={5}>Thanks for signing the petition!</Heading>

			<div className="flex flex-col gap-2">
				<a
					target="_blank"
					href={`https://x.com/intent/tweet?text=I%20just%20signed%20a%20petition%20to%20${encodeURIComponent(loaderData.campaign.title)}&url=${encodeURIComponent(loaderData.url)}`}
					rel="noopener noreferrer"
				>
					<Button className="w-full">
						<XIcon data-slot="icon" />
						Share on X
					</Button>
				</a>

				<a
					target="_blank"
					href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(loaderData.url)}`}
					rel="noopener noreferrer"
				>
					<Button className="w-full">
						<FacebookIcon data-slot="icon" />
						Share on Facebook
					</Button>
				</a>

				<a
					target="_blank"
					href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(loaderData.url)}`}
					rel="noopener noreferrer"
				>
					<Button className="w-full">
						<LinkedInIcon data-slot="icon" />
						Share on LinkedIn
					</Button>
				</a>

				<a
					target="_blank"
					href={`https://bsky.app/post/create?text=I%20just%20signed%20a%20petition%20to%20${encodeURIComponent(loaderData.campaign.title)}&url=${encodeURIComponent(loaderData.url)}`}
					rel="noopener noreferrer"
				>
					<Button className="w-full">
						<BlueskyIcon data-slot="icon" />
						Share on Bluesky
					</Button>
				</a>
			</div>

			<Text>
				You will receive updates about this campaign and others. Read more about
				how we use your data in our{" "}
				<TextLink href="/privacy">Privacy Notice</TextLink>. You can unsubscribe
				at any time.
			</Text>
		</div>
	);
}

export async function action(args: ActionFunctionArgs) {
	const campaignId = args.params.campaignId;

	if (!campaignId) {
		throw new Error("Campaign ID is required");
	}

	const { request } = args;
	const formData = await request.formData();

	const schema = z.object({
		first_name: z.string().min(1, { message: "First name is required" }),
		last_name: z.string().min(1, { message: "Last name is required" }),
		email: z.string().email({ message: "Invalid email address" }),
	});

	const result = schema.safeParse(Object.fromEntries(formData));

	if (!result.success) {
		return {
			success: false,
			errors: result.error.flatten().fieldErrors,
		};
	}

	try {
		const contact = await mobilizehub.contacts.create({
			firstName: result.data.first_name,
			lastName: result.data.last_name,
			email: result.data.email,
			organizationId: organizationId,
			subscribed: true,
		});

		if (contact.error) {
			return {
				success: false,
				errors: { email: contact.error.message },
			};
		}

		const petition = await mobilizehub.petition.addSignature({
			organizationId: organizationId,
			petitionId: campaignId,
			contactId: contact.result.data.contactId,
		});

		if (petition.error) {
			return {
				success: false,
				errors: { email: petition.error.message },
			};
		}
	} catch (error) {
		console.log("Error creating contact:", error);
	}

	return dataWithSuccess(
		{ success: true, errors: null },
		"Thanks for signing the petition!",
	);
}
