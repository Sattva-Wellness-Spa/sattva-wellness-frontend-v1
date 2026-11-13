import Branches from "@/components/Branches";
import BookingForm from "@/components/BookingForm";
import Couples from "@/components/Couples";
import Elements from "@/components/Elements";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Ritual from "@/components/Ritual";
import Therapies from "@/components/Therapies";
import { ToastProvider } from "@/components/Toast";
import { BranchProvider } from "@/context/BranchContext";

/** Section order matches reference/index.html. */
export default function Home() {
  return (
    <BranchProvider>
      <ToastProvider>
        <Header />
        <main id="top">
          <Hero />
          <Branches />
          <Elements />
          <Therapies />
          <Couples />
          <Packages />
          <Ritual />
          <BookingForm />
          <Faq />
        </main>
        <Footer />
      </ToastProvider>
    </BranchProvider>
  );
}
