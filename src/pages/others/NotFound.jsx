import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center lighter-primary-bg px-4">
      <div className="text-center">
        {/* Big 404 */}
        <h1 className="text-8xl font-bold text-brand-500">404</h1>
        <p className="mt-4 text-2xl font-semibold text-slate-700">
          Page Not Found
        </p>
        <p className="mt-2 text-slate-500">
          Oops! The page you’re looking for doesn’t exist or was moved.
        </p>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            onClick={() => navigate(-1)}
            className="rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300"
          >
            Go Back
          </Button>
          <Button onClick={() => navigate("/")} className="rounded-lg">
            Go Home
          </Button>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-12 text-sm text-slate-400">
        &copy; {new Date().getFullYear()} Gona Market. All rights reserved.
      </p>
    </div>
  );
}
