
import Navbar from './Navbar';

interface IPrivacy {
  children: React.ReactNode;
}

const Template = ({ children }: IPrivacy) => {
  return (
    <div className="font-noto-sans-thai">
      <header className="pt-6 pb-6 pl-3 bg-slate-700">
        <Navbar />
      </header>
      {children}
      <footer></footer>
    </div>
  );
};

export default Template;
