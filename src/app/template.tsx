import { ViewTransition } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      enter={{
        "nav-shell": "route-shift",
        "nav-forward": "route-shift",
        "cta-jump": "route-shift",
        default: "route-shift",
      }}
      exit={{
        "nav-shell": "route-fade-out",
        "nav-forward": "route-fade-out",
        "cta-jump": "route-fade-out",
        default: "route-fade-out",
      }}
      default="route-shift"
    >
      <div>{children}</div>
    </ViewTransition>
  );
}