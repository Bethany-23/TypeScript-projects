import { Button } from "@/components/atoms/Button";
import { NavigationMenu } from "@/components/molecules/NavigationMenu";


export default function LandingPage() {
  return (
    <main>
      <NavigationMenu/>
      <section className="hero">
        <h1>Welcome to My Test App</h1>
        <p>Using Tibeb Design System components</p>
        <Button variant="default" size="lg">Get Started</Button>
      </section>
      
    </main>
  );
}
