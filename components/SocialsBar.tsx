import {NextPage} from "next";
import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail} from "react-icons/ai";
import {IconType} from "react-icons";

const SocialsBar: NextPage = () => {
  return (
      <header className={`backdrop-brightness-95 fixed top-0 w-screen h-16 flex justify-center items-center gap-16`}>
          <LinkIcon href={"https://github.com/Hugo-M33"} Icon={AiOutlineGithub} />
          <LinkIcon href={"https://www.linkedin.com/in/hugom33/"} Icon={AiOutlineLinkedin} />
          <LinkIcon href={"mailto:hugo.martin.duloz@gmail.com"} Icon={AiOutlineMail} />
      </header>
  )
}

const LinkIcon: NextPage<{Icon: IconType, href: string}> = ({Icon, href}) => {
    return (
        <a {...{href}} className={`w-8 h-16 grid place-items-center opacity-50 hover:opacity-100 hover:scale-110 cursor-pointer duration-500 transition-all`}>
            <Icon className={`w-full h-full`}/>
        </a>
    )
}

export default SocialsBar