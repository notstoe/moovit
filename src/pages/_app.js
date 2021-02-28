import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContext.tsx";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
