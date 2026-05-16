import { Hero } from '@/components/Hero';
import { Manifesto } from '@/components/Manifesto';
import { FeaturedProject } from '@/components/FeaturedProject';
import { Approach } from '@/components/Approach';
import { WhyLSD } from '@/components/WhyLSD';
import { ProjectStrip } from '@/components/ProjectStrip';
import { NatureNewsletter } from '@/components/NatureNewsletter';
import { LocationWidget } from '@/components/LocationWidget';
import { ContactCTA } from '@/components/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <FeaturedProject />
      <Approach />
      <WhyLSD />
      <ProjectStrip />
      <NatureNewsletter />
      <LocationWidget />
      <ContactCTA />
    </>
  );
}
