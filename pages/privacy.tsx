/* eslint-disable react/no-children-prop */
import Template from "../components/Template"
import ReactMarkdown from 'react-markdown';
import { privacyPolicy } from "../assets/privacy-policy";

interface IPrivacy {
  children: React.ReactNode
}

const markdownSource = `
## Main content
`;

const Privacy = ({ children }: IPrivacy) => {
  return (
    <Template>
      <section className="max-w-5xl ml-auto mr-auto">
        <p className="text-4xl mt-8">
          นโยบายความเป็นส่วนตัว
        </p>
        <span>Privacy Policy</span>
        <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
      </section>
    </Template>
  )
}

export default Privacy