import { Header } from "../components/Header";
import { Products } from "../components/Products";
import { Review } from "../components/Review";
import { RequestQuote } from "../components/RequestQuote";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-primary-color">
      <Header />
      <Products />
      <Review />
      <RequestQuote />
      <Contact />
    </main>
  );
}
