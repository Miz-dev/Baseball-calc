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
		label: "ピッチング",
		initiallyOpened: true,
		links: [
			{ label: "防御率", link: "/era" },
			{ label: "奪三振率", link: "/K-9" },
			{ label: "与四死球率", link: "/BB-9" },
			{ label: "WHIP", link: "/whip" },
		],
	},
	{
		label: "バッティング",
		links: [
			{ label: "打率", link: "/avg" },
			{ label: "長打率", link: "/slg" },
			{ label: "出塁率", link: "/obp" },
			{ label: "OPS", link: "/ops" },
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
