import { ViewTransition } from "react";

/**
 * Re-mounts on every navigation, so the outgoing page plays "page-out" and the incoming one "page-in"
 * (see globals.css). The header is anchored with its own view-transition name and doesn't move.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
