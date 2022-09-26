/* Next.js imports */
import Script from "next/script";

/* first-party component imports */
import PageLayout from "../components/layouts/page";
import Leader from "../components/leader";

/* site data */
import { getCollection, getCollectionItem } from "../lib/collections";

export default function Team({ page, leaders }) {
  leaders.sort((a, b) => a.priority - b.priority);

  return (
    <>
      <PageLayout page={page}>
        <section className="executive-section">
          <div className="container">
            <h2>Executive Team</h2>
            <ul className="team-list">
              {leaders
                .filter((leader) => leader.executive && !leader.previous)
                .map((leader, i) => (
                  <Leader leader={leader} key={i} />
                ))}
            </ul>
          </div>
        </section>
        <ul className="team-list">
          {leaders
            .filter((leader) => !leader.executive && !leader.previous)
            .map((leader, i) => (
              <Leader leader={leader} key={i} />
            ))}
        </ul>
        <h2>Alumni and Affiliates</h2>
        <ul className="team-list">
          {leaders
            .filter((leader) => leader.previous)
            .map((leader, i) => (
              <Leader leader={leader} key={i} />
            ))}
        </ul>
      </PageLayout>
      <Script
        id="cal-embed"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://cal.eauw.org/embed/embed.js", "init");
          Cal("init", {origin:"https://cal.eauw.org"});
          Cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#0c869b"}}});
        `
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  const page = await getCollectionItem("pages", "team");
  const leaders = await getCollection("leadership-team");

  return {
    props: {
      page: JSON.parse(JSON.stringify(page)),
      leaders
    }
  };
}
