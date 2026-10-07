import Page from "../components/Page";
import PageHeader from "../components/PageHeader";

export default function Placeholder({ eyebrow, title }) {
  return (
    <Page title={title}>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        subtitle="This page is coming together in the next phases."
      />
      <section className="section-y">
        <div className="container-x">
          <p className="text-stone">Content goes here.</p>
        </div>
      </section>
    </Page>
  );
}