import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFreeCodeCamp} from "@fortawesome/free-brands-svg-icons";
import {faExpandArrowsAlt} from "@fortawesome/free-solid-svg-icons";
import './Header.scss';

type HeaderProps = {
  title: string;
  onClick: () => void;
};

function Header(props: HeaderProps) {
  return (

    <div className='header'>
      <FontAwesomeIcon className='header-icon' icon={faFreeCodeCamp}/>
      <span className='header-title'>{props.title}</span>
      <div className={'spacer'}/>
      <FontAwesomeIcon
        className='header-icon clickable'
        icon={faExpandArrowsAlt}
        onClick={props.onClick}
      />
    </div>
  );
}

export default Header;