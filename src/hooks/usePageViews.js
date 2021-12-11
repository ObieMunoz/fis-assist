import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

function usePageViews() {
    let location = useLocation();
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            ReactGA.initialize("G-JJCB5XWQM3");
            window.GA_INITIALIZED = true;
        }
        ReactGA.set({ page: location.pathname });
        ReactGA.send("pageview");
    }, [location]);
}

export default usePageViews;