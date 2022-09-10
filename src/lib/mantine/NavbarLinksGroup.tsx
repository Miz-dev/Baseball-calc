import { useState } from "react";
import { Group, Box, Collapse, Text, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import { useStyles } from "./useStyles";

interface LinksGroupProps {
	label: string;
	initiallyOpened?: boolean;
	links?: { label: string; link: string }[];
}

export const mockdata = [
	{
		label: "Market news",
		initiallyOpened: true,
		links: [
			{ label: "Overview", link: "/test" },
			{ label: "Forecasts", link: "/" },
			{ label: "Outlook", link: "/" },
			{ label: "Real time", link: "/" },
		],
	},
	{
		label: "Releases",
		links: [
			{ label: "Upcoming releases", link: "/" },
			{ label: "Previous releases", link: "/" },
			{ label: "Releases schedule", link: "/" },
		],
	},
];

export function LinksGroup({ label, initiallyOpened, links }: LinksGroupProps) {
	const { classes } = useStyles();
	const hasLinks = Array.isArray(links);
	const [opened, setOpened] = useState(initiallyOpened || false);
	const items = (hasLinks ? links : []).map((link) => (
		<Text<"a">
			// component="a"
			className={classes.link}
			// href={link.link}
			key={link.label}
			onClick={(event) => event.preventDefault()}
		>
			<Link href={link.link}>{link.label}</Link>
		</Text>
	));

	return (
		<>
			<UnstyledButton
				onClick={() => setOpened((o) => !o)}
				className={classes.control}
			>
				<Group position="apart" spacing={0}>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Box ml="md">{label}</Box>
					</Box>
				</Group>
			</UnstyledButton>
			{hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
		</>
	);
}
