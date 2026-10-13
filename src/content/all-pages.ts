import type { PageContent } from "./types";
import { pages as core } from "./pages/core";
import { pages as servicesA } from "./pages/services-a";
import { pages as servicesB } from "./pages/services-b";
import { pages as strategiesA } from "./pages/strategies-a";
import { pages as strategiesB } from "./pages/strategies-b";
import { pages as industriesA } from "./pages/industries-a";
import { pages as industriesB } from "./pages/industries-b";
import { pages as b2b } from "./pages/b2b";
import { pages as b2bB } from "./pages/b2b-b";
import { pages as b2c } from "./pages/b2c";
import { pages as leadCaptureA } from "./pages/lead-capture-a";
import { pages as leadCaptureB } from "./pages/lead-capture-b";
import { pages as qualification } from "./pages/qualification";
import { pages as tools } from "./pages/tools";
import { pages as resourcesA } from "./pages/resources-a";
import { pages as resourcesB } from "./pages/resources-b";
import { pages as compare } from "./pages/compare";

/** Every page with authored content (Phase 1 and Phase 2). */
export const allPages: PageContent[] = [
  ...core,
  ...servicesA,
  ...servicesB,
  ...strategiesA,
  ...strategiesB,
  ...industriesA,
  ...industriesB,
  ...b2b,
  ...b2bB,
  ...b2c,
  ...leadCaptureA,
  ...leadCaptureB,
  ...qualification,
  ...tools,
  ...resourcesA,
  ...resourcesB,
  ...compare,
];
