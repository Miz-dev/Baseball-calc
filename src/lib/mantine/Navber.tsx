import { Navbar, ScrollArea, createStyles } from "@mantine/core";
import { LinksGroup, mockdata } from "./NavbarLinksGroup";
import { useStyles } from "./useStyles";

export function NavbarNested() {
	const { classes } = useStyles();
	const links = mockdata.map((item) => (
		<LinksGroup {...item} key={item.label} />
	));

	return (
		<Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
			<Navbar.Section grow className={classes.links} component={ScrollArea}>
				<div className={classes.linksInner}>{links}</div>
			</Navbar.Section>
		</Navbar>
	);
}
