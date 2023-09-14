import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { PageBaseBody } from "../../Components/PageBaseBody";

export const PageBase = () => {
  return (
    <main>
      <Header />
      <PageBaseBody />
      <Footer />
    </main>
  );
};
