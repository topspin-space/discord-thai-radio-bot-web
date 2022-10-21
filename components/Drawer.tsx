import Link from 'next/link'
import { useSpring, animated } from "react-spring";
type DataSource = {
  icon: React.ReactNode;
  name: string;
  url?: string;
};

interface IDrawerProps {
  open: boolean;
  dataSource: Readonly<DataSource[]>;
  container(): React.ReactNode;
}

const Drawer = (props: IDrawerProps) => {
  const { open = false, dataSource, container } = props;
  const springProps = useSpring({
    delay: 500,
    to: { opacity: 1, transform: 'translateX(0px)' },
    from: { opacity: 0, transform: 'translateX(-1000px)' },
    reset: open === false
  })

  const sideBarHiddenClassName = !open ? "hidden" : "";

  return (
    <animated.div
      style={open ? springProps : {}}
      className={`${sideBarHiddenClassName} h-full w-72 fixed z-10 top-0 left-0 bg-slate-900 overflow-x-hidden pt-16 flex flex-col`}
    >
      <div className="ml-8 cursor-pointer">
        <ul>
          {dataSource.map((source, idx) => {
            return (
              <Link 
                href={source.url ?? '/'}                   
                key={idx}
              >
                <li
                  className="mb-6 flex font-noto-sans-thai text-lg items-center"
                >
                  {source.icon}
                  <span className="ml-2">{source.name}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className='mb-8 ml-4 mr-8'>
          {container()}
      </div>
    </animated.div>
  );
};

export default Drawer;
