import Emoji from "./Emoji"

interface IPrivacy {
  children: React.ReactNode
}

const Template = ({ children }: IPrivacy) => {
  return (
    <div className="font-noto-sans-thai">
      <header className="pt-6 pb-6 pl-3 bg-slate-700">
        <div className="max-w-5xl ml-auto mr-auto">
          <Emoji symbol="📻" label="radio" className="lg:text-6xl" />
        </div>
      </header>
      {children}
      <footer></footer>
    </div>
  )
}

export default Template