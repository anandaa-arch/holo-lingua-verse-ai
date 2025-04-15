
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="max-w-[500px] text-center">
        <h1 className="text-5xl font-semibold mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="apple-button flex items-center justify-center gap-1"
          >
            Return to Home
            <ChevronRight className="h-4 w-4" />
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="text-[#0066CC] hover:underline flex items-center justify-center gap-1 transition-colors"
          >
            Go Back
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
