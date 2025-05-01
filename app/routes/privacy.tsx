import { Heading } from "~/components/heading";
import { Text } from "~/components/text";

export function meta() {
	return [
		{ title: "Privacy - Causes" },
		{ name: "description", content: "Empowering Citizen Engagement" },
	];
}

const constants = {
	organizationName: "Causes",
	address: "1 Main Street, Wellington, New Zealand",
	email: "causes@mobilizehub.com",
};

export default function Index() {
	return (
		<main className="max-w-5xl mx-auto px-6 md:px-8 py-20">
			<div className="w-full">
				<Heading level={2}>Privacy Policy</Heading>
				<Text className="mt-2">
					This privacy policy describes how we collect, use, and share
					information about you when you use our website.
				</Text>
			</div>
			<PrivacyPolicy />
		</main>
	);
}

function PrivacyPolicy() {
	return (
		<div className="mt-16 prose prose-sm prose-slate dark:prose-invert max-w-none">
			<h2>1. INTRODUCTION</h2>

			<p>
				Welcome to {constants.organizationName} ("we," "our," or "us"). We are
				committed to protecting your privacy and ensuring the security of your
				personal information. This Privacy Policy explains how we collect, use,
				disclose, and safeguard your information when you interact with our
				services, website, mobile applications, and other platforms
				(collectively, the "Services").
			</p>

			<p>
				By accessing or using our Services, you consent to the practices
				described in this Privacy Policy.
			</p>

			<h2>2. INFORMATION WE COLLECT</h2>

			<h3>2.1 Information You Provide to Us</h3>

			<p>We may collect information that you voluntarily provide when you:</p>
			<ul>
				<li>Create an account or profile</li>
				<li>Use our products or services</li>
				<li>Sign up for newsletters or communications</li>
				<li>Participate in surveys, promotions, or events</li>
				<li>Contact our customer support</li>
				<li>Apply for opportunities with our organization</li>
			</ul>

			<p>This information may include:</p>
			<ul>
				<li>
					Personal identifiers (name, email address, phone number, postal
					address)
				</li>
				<li>Payment information (credit card details, billing address)</li>
				<li>Demographic information (age, gender, location)</li>
				<li>Professional or employment information</li>
				<li>Communications with us</li>
				<li>Information about your interests and preferences</li>
			</ul>

			<h3>2.2 Information Collected Automatically</h3>

			<p>When you access our Services, we may automatically collect:</p>
			<ul>
				<li>Device information (IP address, browser type, operating system)</li>
				<li>Usage data (pages visited, time spent, click patterns)</li>
				<li>Location information (with your permission)</li>
				<li>Cookies and similar tracking technologies</li>
			</ul>

			<h3>2.3 Information from Third Parties</h3>

			<p>We may receive information from:</p>
			<ul>
				<li>Partner organizations</li>
				<li>Social media platforms (when you connect your accounts)</li>
				<li>Public databases</li>
				<li>Payment processors and financial institutions</li>
			</ul>

			<h2>3. HOW WE USE YOUR INFORMATION</h2>

			<p>We use your information for purposes including:</p>

			<ul>
				<li>Providing, maintaining, and improving our Services</li>
				<li>Processing your transactions</li>
				<li>
					Communicating with you about our Services, updates, and promotions
				</li>
				<li>Personalizing your experience</li>
				<li>Analyzing usage patterns to enhance our Services</li>
				<li>Protecting against fraud and ensuring security</li>
				<li>Complying with legal obligations</li>
			</ul>

			<h2>4. HOW WE SHARE YOUR INFORMATION</h2>

			<p>We may share your information with:</p>

			<h3>4.1 Service Providers</h3>
			<p>
				Third parties that help us deliver our Services (payment processors,
				hosting providers, email services).
			</p>

			<h3>4.2 Partner Organizations</h3>
			<p>
				With your consent, we may share information with other organizations
				aligned with our mission.
			</p>

			<h3>4.3 Legal Requirements</h3>
			<p>When required by law, court order, or governmental authority.</p>

			<h3>4.4 Business Transfers</h3>
			<p>In connection with a merger, acquisition, or sale of assets.</p>

			<h3>4.5 With Your Consent</h3>
			<p>When you have given us permission to do so.</p>

			<p>
				We do not sell your personal information to third parties for monetary
				compensation.
			</p>

			<h2>5. YOUR CHOICES AND RIGHTS</h2>

			<p>
				Depending on your location, you may have rights regarding your personal
				information, including:
			</p>

			<ul>
				<li>Access to your personal information</li>
				<li>Correction of inaccurate information</li>
				<li>Deletion of your information</li>
				<li>Restriction of processing</li>
				<li>Data portability</li>
				<li>Objection to processing</li>
				<li>Withdrawal of consent</li>
			</ul>

			<p>
				To exercise these rights, please contact us using the information in
				Section 10.
			</p>

			<h3>5.1 Communication Preferences</h3>
			<p>
				You can opt out of receiving marketing communications by following the
				unsubscribe instructions in our emails or contacting us directly.
			</p>

			<h3>5.2 Cookies and Tracking</h3>
			<p>
				You can manage cookies through your browser settings and our cookie
				preference center.
			</p>

			<h2>6. DATA SECURITY</h2>

			<p>
				We implement reasonable security measures to protect your information
				from unauthorized access, alteration, disclosure, or destruction.
				However, no method of transmission over the internet or electronic
				storage is 100% secure, and we cannot guarantee absolute security.
			</p>

			<h2>7. DATA RETENTION</h2>

			<p>
				We retain your personal information for as long as necessary to fulfill
				the purposes outlined in this Privacy Policy, unless a longer retention
				period is required or permitted by law.
			</p>

			<h2>8. CHILDREN'S PRIVACY</h2>

			<p>
				Our Services are not intended for children under 13 years of age. We do
				not knowingly collect personal information from children under 13. If we
				learn we have collected personal information from a child under 13, we
				will delete that information as quickly as possible.
			</p>

			<h2>9. INTERNATIONAL DATA TRANSFERS</h2>

			<p>
				We may transfer, process, and store your information on servers located
				outside your country of residence, including in the United States. These
				countries may have data protection laws different from those in your
				country.
			</p>

			<h2>10. CONTACT US</h2>

			<p>
				If you have questions or concerns about this Privacy Policy or our data
				practices, please contact us at:
			</p>

			<p>
				<strong>{constants.organizationName}</strong>
				<br />
				Address: <strong>{constants.address}</strong>
				<br />
				Email: <strong>{constants.email}</strong>
			</p>

			<h2>11. CHANGES TO THIS PRIVACY POLICY</h2>

			<p>
				We may update this Privacy Policy from time to time. The updated version
				will be indicated by an updated "Last Updated" date and will be
				effective as soon as it is accessible. We encourage you to review this
				Privacy Policy regularly to stay informed of how we are protecting your
				information.
			</p>

			<h2>12. CALIFORNIA PRIVACY RIGHTS</h2>

			<p>
				California residents may have additional rights under the California
				Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA),
				including:
			</p>

			<ul>
				<li>
					The right to know what personal information is collected, used,
					shared, or sold
				</li>
				<li>The right to delete personal information</li>
				<li>The right to opt-out of the sale of personal information</li>
				<li>The right to non-discrimination for exercising these rights</li>
			</ul>

			<h2>13. EUROPEAN ECONOMIC AREA (EEA) RESIDENTS</h2>

			<p>
				If you are located in the EEA, we process your personal data in
				accordance with the General Data Protection Regulation (GDPR). The legal
				bases we rely on for processing your information include:
			</p>

			<ul>
				<li>Performance of our contract with you</li>
				<li>Compliance with legal obligations</li>
				<li>Your consent</li>
				<li>Legitimate interests</li>
			</ul>

			<h2>14. DISPUTE RESOLUTION</h2>

			<p>
				Any disputes arising from or relating to this Privacy Policy shall be
				resolved in accordance with our Terms of Service.
			</p>

			<hr />

			<p>This Privacy Policy was last updated on 28 April, 2025.</p>
		</div>
	);
}
