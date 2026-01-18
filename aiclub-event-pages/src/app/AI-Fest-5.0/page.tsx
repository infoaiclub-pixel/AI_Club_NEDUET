import {Hero,SponsorsSection,InfoSection , CompetitionsSection, HuntSection,EsportsSection , OtherActivitiesSection,CTASection} from "@/components";
export default function AiFestPage() {
  return (
    <>
      {/* JSON-LD EVENT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "AI Fest 5.0",
            description:
              "AI Fest 5.0 is a 3-day technology festival featuring a job fair, project exhibition, AI talks, workshops, and e-sports competitions.",
            startDate: "2026-02-27T09:00",
            endDate: "2026-02-29T18:00",
            eventAttendanceMode:
              "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            location: {
              "@type": "Place",
              name: "NED University of Engineering & Technology",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
              },
            },
            organizer: {
              "@type": "Organization",
              name: "NEDUET AI Club",
            },
          }),
        }}
      />

      <main>
        <Hero />
        <SponsorsSection />
        <InfoSection />
        <CompetitionsSection />
        <HuntSection />
        <EsportsSection />
        <OtherActivitiesSection />
        <CTASection />
      </main>
    </>
  );
}
