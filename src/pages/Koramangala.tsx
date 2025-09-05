import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Koramangala = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to Bengaluru since tables are merged
    navigate("/bengaluru", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to Bengaluru...</p>
      </div>
    </div>
  );
};

export default Koramangala;