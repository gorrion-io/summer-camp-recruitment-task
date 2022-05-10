import "../styles/main.scss";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
    const [showChild, setShowChild] = useState(false);
    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }
    return <Component {...pageProps} />;
}

export default MyApp;
