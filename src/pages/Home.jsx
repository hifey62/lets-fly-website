import Page from "../components/Page";
import Hero from "../components/home/Hero";
import WhatWeDo from "../components/home/WhatWeDo";
import Approach from "../components/home/Approach";
import Impact from "../components/home/Impact";
import Why from "../components/home/Why";
import Videos from "../components/home/Videos";
import Partners from "../components/home/Partners";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <Page description="Let's Fly Initiative helps young people discover opportunities, career guidance and mentorship. Start with what you have, from where you are.">
      <Hero />
      <WhatWeDo />
      <Approach />
      <Impact />
      <Why />
      <Videos />
      <Partners />
      <CTA />
    </Page>
  );
}