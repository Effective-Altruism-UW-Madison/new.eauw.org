/* Next.js imports */
import ExportedImage from "next-image-export-optimizer";

/* first-party component imports */
import PageLayout from "../components/layouts/page";
import Calendar from "../components/calendar";
import Icon from "../components/icon";

/* site data */
import { getCollection, getCollectionItem } from "../lib/collections";

export default function Home({ page, popups }) {
  return (
    <PageLayout page={page} popups={popups}>
      <section className="main container">
        <div className="image-and-text">
          <div className="grid-left">
            <ExportedImage
              src={page.mainImage}
              alt="members"
              width={1146}
              height={828}
            />
          </div>

          <div className="grid-right">
            <p className="editable">
              We are a community of UW&ndash;Madison students unified by a
              common desire to do the most we can to improve the world. Our
              organization seeks to promote the global movement of effective
              altruism, using evidence and reason to assess how to benefit
              others as much as possible and taking action based on the
              findings.
            </p>
            <a
              className="btn"
              href="https://www.effectivealtruism.org/articles/introduction-to-effective-altruism"
              target="_blank"
              rel="noreferrer"
            >
              Learn more about effective altruism
              <Icon icon="Go" />
            </a>
          </div>
        </div>
      </section>

      {page.calendar && (
        <section className="beige-section">
          <div className="container">
            <h2>Upcoming Events</h2>
            <Calendar maxEvents={page.maxEvents} />
          </div>
        </section>
      )}

      {page.testimonials && (
        <section className="container white-section">
          <div className="testimonials">
            {page.testimonials.map((testimonial, i) => (
              <blockquote className="testimonial" key={i}>
                <p className="testimonial-message">{testimonial.message}</p>
                <p className="testimonial-author">
                  <ExportedImage
                    src={testimonial.testimonialImage}
                    alt={`Photo of ${testimonial.name}`}
                    width={60}
                    height={60}
                    unoptimized
                  />{" "}
                  {testimonial.name}
                </p>
              </blockquote>
            ))}
          </div>
        </section>
      )}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const page = await getCollectionItem("pages", "index");
  const popups = await getCollection("popups");

  return {
    props: {
      page: JSON.parse(JSON.stringify(page)),
      popups
    }
  };
}
