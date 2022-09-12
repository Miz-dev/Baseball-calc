import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { NavbarNested } from "src/lib/mantine/Navber";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			emotionOptions={{ key: "mantine", prepend: false }}
		>
			<div className="flex">
				<NavbarNested />
				<Component {...pageProps} />
			</div>
		</MantineProvider>
	);
}

export default MyApp;
