import "./index.scss"

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faGithub,
  faReact,
  faPinterest,
  faFreeCodeCamp
} from '@fortawesome/free-brands-svg-icons'

import {
  faNewspaper,
  faFilm,
  faSkullCrossbones,
  faGhost
} from '@fortawesome/free-solid-svg-icons'

//images
import HydeImg from "../../assets/images/hyde.jpg"
import GoogleLogo from "../../assets/images/google.png"
import OpenaiLogo from "../../assets/images/openai.png"
import PinterestLogo from "../../assets/images/pinterest.jpeg"


const list = []
const TextArea = ({ subtitle, title, text, list }) => {
  return (
    <div className="text-area">
      <p className="subtitle"> {subtitle}</p >
      <h1 className="title">{title}</h1>
      <p className="text">
        {text}
      </p>
      <div className="graphics">{list}</div>
    </div >
  )
}

const ServicesVisuals = ({ icon, title, text }) => {
  return (
    <div className="card">
      <div className="card__icon">{icon}</div>
      <h2 className="card__title">{title}</h2>
      <p className="card__text">{text}</p>
    </div >
  )
}

const MemberCards = ({ img_url, name, job, description }) => {
  return (
    <div className="member-card">
      <div className="member-card__dp img-container">
        <img src={img_url} className="img member-card__img" />
      </div>
      <div className="member-card__main">
        <h3 className="member-card__name">{name}</h3>
        <h5 className="member-card__job">{job}</h5>
        <div className="member-card__description">{description}</div>
        <div className="member-card__socials">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
    </div >
  )
}

const About = () => {
  return (
    <div className="about">
      <div className="main">
        <TextArea
          subtitle="about us"
          title="hello, we are filamu"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elitFusce at erat tinciduntante ultricies mollis at bibendum
          ligula. Donec quis velit finibus,tempus lacusnec, eleifend orc
          . Nam sit amet nisl sem. Donec id commodo erat. Maurisporttitor
          orci ac lectus aliquam rutrum. Aliquam erat volutpat.
        Phasellus vitaefermentum nisi. Lorem ipsum dolor sit amet, 
        consectetur adipiscingelit. Fusceat erat tincidunt ante ultrici
        mollis at bibendum ligula. Donequis velitfinibus, tempus lacus 
        nec, eleifend orci. Nam sit amet nis."
          list={[<FontAwesomeIcon icon={faTwitter} />, <FontAwesomeIcon
            icon={faFacebook} />, <FontAwesomeIcon icon={faGithub} />]}
        />
      </div>
      <div className="tools">
        <FontAwesomeIcon icon={faGithub} className="tools__icon" />
        <FontAwesomeIcon icon={faReact} className="tools__icon" />
        <FontAwesomeIcon icon={faFreeCodeCamp} className="tools__icon" />
        <FontAwesomeIcon icon={faPinterest} className="tools__icon" />
      </div>
      <div className="services">
        <TextArea
          subtitle="services"
          title="what we do"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elitFusce at erat tinciduntante ultricies mollis at bibendum
          ligula. Donec quis velit finibus,tempus lacusnec, eleifend orc
          . Nam sit amet nisl sem. Donec id commodo erat. Maurisporttitor
          orci ac lectus aliquam rutrum. Aliquam erat volutpat.
        Phasellus vitaefermentum nisi. Lorem ipsum dolor sit amet, 
        consectetur adipiscingelit. Fusceat erat tincidunt ante ultrici
        mollis at bibendum ligula. Donequis velitfinibus, tempus lacus 
        nec, eleifend orci. Nam sit amet nis."
          list={[
            <ServicesVisuals
              icon={<FontAwesomeIcon icon={faSkullCrossbones} className="icon" />}
              title="movie piracy"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce at erat tincidunt ante ultricies mollis at." />,
            <ServicesVisuals
              icon={<FontAwesomeIcon icon={faGhost} className="icon" />}
              title="identity privacy"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce at erat tincidunt ante ultricies mollis at." />,
            <ServicesVisuals
              icon={<FontAwesomeIcon icon={faFilm} className="icon" />}
              title="free movies"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce at erat tincidunt ante ultricies mollis at." />,
            <ServicesVisuals
              icon={<FontAwesomeIcon icon={faNewspaper} className="icon" />}
              title="latest news"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce at erat tincidunt ante ultricies mollis at bibendum." />
          ]}
        />
      </div >
      <div className="team">
        <TextArea
          subtitle="our team"
          title="meet the expert team"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elitFusce at erat tinciduntante ultricies mollis at bibendum
          ligula. Donec quis velit finibus,tempus lacusnec, eleifend orc
          . Nam sit amet nisl sem. Donec id commodo erat. Maurisporttitor
          orci ac lectus aliquam rutrum. Aliquam erat volutpat.
        Phasellus vitaefermentum nisi. Lorem ipsum dolor sit amet, 
        consectetur adipiscingelit. Fusceat erat tincidunt ante ultrici
        mollis at bibendum ligula. Donequis velitfinibus, tempus lacus 
        nec, eleifend orci. Nam sit amet nis."
          list={[
            <MemberCards
              img_url={HydeImg}
              name="john doe"
              job="web developer"
              description="Lorem ipsum dolor sit amet, consectetur
              adipiscing elit."
            />,
            <MemberCards
              img_url={GoogleLogo}
              name="google"
              job="information hub"
              description="Lorem ipsum dolor sit amet, consectetur
              adipiscing elit."
            />,
            <MemberCards
              img_url={OpenaiLogo}
              name="chatgpt"
              job="debugger"
              description="Lorem ipsum dolor sit amet, consectetur
              adipiscing elit."
            />,
            <MemberCards
              img_url={PinterestLogo}
              name="pinterest"
              job="web designer"
              description="Lorem ipsum dolor sit amet, consectetur
              adipiscing elit."
            />
          ]}
        />
      </div>
    </div >
  )
}

export default About