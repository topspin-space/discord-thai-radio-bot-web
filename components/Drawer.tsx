import Link from 'next/link'
import { useSpring, animated } from "react-spring";
type DataSource = {
  icon: React.ReactNode;
  name: string;
  url?: string;
};

interface IDrawerProps {
  open: boolean;
  dataSource: DataSource[];
}

const Drawer = (props: IDrawerProps) => {
  const { open = false, dataSource } = props;
  const springProps = useSpring({
    delay: 500,
    to: { opacity: 1, transform: 'translateX(0px)' },
    from: { opacity: 0, transform: 'translateX(-1000px)' },
    reset: open === false
  })

  const sideBarHiddenClassName = !open ? "hidden" : "";

  console.log(springProps);
  return (
    <animated.div
      style={open ? springProps : {}}
      className={`${sideBarHiddenClassName} h-full w-72 fixed z-10 top-0 left-0 bg-slate-900 overflow-x-hidden pt-16`}
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
    </animated.div>
  );
};

export default Drawer;
