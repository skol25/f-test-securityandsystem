
import Header from '@/components/layout/header/header';
import About from '@/components/profile/about/about';
import ContactForm from '@/components/profile/ContactForm/ContactForm';
import Interests from '@/components/profile/Interests/Interests';
import '@/styles/global.css';

export default function Home() {
  return (
    <div>
      <Header username={"Andres Lobo"} profileImage={"/images/user_icon.svg"} />
      <About />
      <Interests />
      <ContactForm />
    </div>
  );
}
