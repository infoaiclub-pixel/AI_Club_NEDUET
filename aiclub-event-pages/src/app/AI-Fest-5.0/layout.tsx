import type { Metadata } from "next";



export const metadata: Metadata = {
  metadataBase: new URL("https://aiclub.pk"),

  title: "AI Fest 5.0 - 3-Day Tech Event, Job Fair, Project Expo & E-Sports",
  description:
    "AI Fest 5.0 is a 3-day technology festival featuring a job fair, project exhibition, AI talks, workshops, e-sports, and competitive gaming at NEDUET.",

  keywords: [
    "AI Fest 5.0",
    "AI Fest",
    "tech event Pakistan",
    "technology festival",
    "AI event",
    "job fair",
    "project exhibition",
    "e-sports tournament",
    "gaming competition",
    "NEDUET AI Club",
  ],

  openGraph: {
    title: "AI Fest 5.0 - 3-Day Tech Event, Job Fair & E-Sports",
    description:
      "Join AI Fest 5.0, a 3-day tech festival with job fair, project expo, AI talks, workshops, and gaming competitions at NEDUET.",
    type: "website",
    siteName: "NEDUET AI Club",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
