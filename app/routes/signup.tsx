import {
	type ActionFunctionArgs,
	Form,
	type MetaFunction,
	useActionData,
	useNavigation,
} from "react-router";
import { dataWithSuccess } from "remix-toast";
import { z } from "zod";
import { Button } from "~/components/button";
import { ErrorMessage, Field, FieldGroup, Label } from "~/components/field";
import { Heading } from "~/components/heading";
import { Input } from "~/components/input";
import { Text, TextLink } from "~/components/text";
import { mobilizehub, organizationId } from "~/mobilizehub";

export function meta() {
	return [
		{ title: "Signup - Causes" },
		{ name: "description", content: "Empowering Citizen Engagement" },
	];
}

export default function Index() {
	const navigation = useNavigation();
	const pending = navigation.state === "submitting";
	const actionData = useActionData<typeof action>();

	return (
		<main className="max-w-7xl mx-auto px-6 md:px-8 py-20">
			<Form method="post" className="flex w-full max-w-lg flex-col gap-8">
				<div className="w-full">
					<Heading level={2}>Get campaign updates</Heading>
					<Text className="mt-2">
						Sign up to receive the latest news and updates.
					</Text>
				</div>

				<FieldGroup>
					<Field invalid={!!actionData?.errors?.first_name}>
						<Label>First name</Label>
						<Input name="first_name" placeholder="First name" />
						{actionData?.errors?.first_name && (
							<ErrorMessage>{actionData?.errors?.first_name}</ErrorMessage>
						)}
					</Field>

					<Field invalid={!!actionData?.errors?.last_name}>
						<Label>Last name</Label>
						<Input name="last_name" placeholder="Last name" />
						{actionData?.errors?.first_name && (
							<ErrorMessage>{actionData?.errors?.last_name}</ErrorMessage>
						)}
					</Field>

					<Field invalid={!!actionData?.errors?.email}>
						<Label>Email</Label>
						<Input name="email" placeholder="Email" type="email" />
						{actionData?.errors?.email && (
							<ErrorMessage>{actionData?.errors?.email}</ErrorMessage>
						)}
					</Field>
				</FieldGroup>

				<Button type="submit" disabled={pending}>
					{pending ? "Submitting..." : "Sign up"}
				</Button>

				<p className="text-sm text-zinc-500">
					Read more about how we use your data in our{" "}
					<TextLink href="/privacy">Privacy Notice</TextLink>. You can
					unsubscribe at any time.
				</p>
			</Form>
		</main>
	);
}

export async function action(args: ActionFunctionArgs) {
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
		await mobilizehub.contacts.create({
			firstName: result.data.first_name,
			lastName: result.data.last_name,
			email: result.data.email,
			organizationId: organizationId,
			subscribed: true,
		});
	} catch (error) {
		console.log("Error creating contact:", error);
	}

	return dataWithSuccess(
		{ success: true, errors: null },
		"Thanks for signing up! We'll keep you updated.",
	);
}
