import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

function usePageViews() {
    let location = useLocation();
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            ReactGA.initialize("G-JJCB5XWQM3")
            window.GA_INITIALIZED = true;
        }
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    }, [location]);
}

export default usePageViews;