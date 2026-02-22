import { createBrowserRouter, Navigate } from "react-router";
import { Layout } from "./components/Layout";
import { LandingPage } from "./pages/LandingPage";
import { FundingReadiness } from "./pages/FundingReadiness";
import { PitchDeck } from "./pages/PitchDeck";
import { Opportunities } from "./pages/Opportunities";
import { MentorMatching } from "./pages/MentorMatching";
import { GlobalReach } from "./pages/GlobalReach";
import { AddMyStory } from "./pages/AddMyStory";
import { Dashboard } from "./pages/Dashboard";
import { Campaigns } from "./pages/Campaigns";
import { DemoHub } from "./pages/DemoHub";
import { AnalyzingPitch } from "./pages/AnalyzingPitch";
import { PitchFeedback } from "./pages/PitchFeedback";
import { FundingHub } from "./pages/FundingHub";
import { OrganizationDetail } from "./pages/OrganizationDetail";
import { DonateAmount } from "./pages/DonateAmount";
import { DonateMessage } from "./pages/DonateMessage";
import { DonateSummary } from "./pages/DonateSummary";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "dashboard", Component: Dashboard },
      { path: "campaigns", Component: Campaigns },
      { path: "demo-hub", Component: DemoHub },
      { path: "analyzing-pitch", Component: AnalyzingPitch },
      { path: "pitch-feedback", Component: PitchFeedback },
      { path: "global-reach", Component: GlobalReach },
      { path: "funding", Component: FundingReadiness },
      { path: "pitch-deck", Component: PitchDeck },
      { path: "opportunities", Component: Opportunities },
      { path: "mentors", Component: MentorMatching },
      { path: "add-my-story", Component: AddMyStory },
      { path: "funding-hub", Component: FundingHub },
      { path: "go-fund-me", element: <Navigate to="/funding-hub" replace /> },
      { path: "organization/:id", Component: OrganizationDetail },
      { path: "donate/:id/amount", Component: DonateAmount },
      { path: "donate/:id/message", Component: DonateMessage },
      { path: "donate/:id/summary", Component: DonateSummary },
    ],
  },
  // Auth routes without Layout
  {
    path: "/signin",
    Component: SignIn,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
]);