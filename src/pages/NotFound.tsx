
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // This now renders an HTML string that mimics the React JSX structure
  return (
    <Layout>
      <div className="page-container flex items-center justify-center">
        <div className="vintage-card max-w-xl mx-auto text-center retro-shadow">
          <h1 className="text-8xl font-bebas text-stoner-brown mb-4">404</h1>
          <h2 className="text-3xl font-yellowtail text-stoner-orange mb-6">Like, Whoa... Wrong Turn</h2>
          <p className="text-xl text-stoner-brown mb-8">
            This cosmic path doesn't exist in our groovy universe, man.
          </p>
          <Link to="/" className="vintage-button inline-block">
            Back to the Pad
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
