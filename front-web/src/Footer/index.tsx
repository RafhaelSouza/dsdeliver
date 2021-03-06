import './styles.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';

function Footer() {
	return(
		<footer className="main-footer">
			App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
			<div className="footer-icons">
				<a href="https://pt-br.reactjs.org/" target="_new">
					<YoutubeIcon/>
				</a>
				<a href="https://pt-br.reactjs.org/" target="_new">
					<InstagramIcon/>
				</a>
				<a href="https://pt-br.reactjs.org/" target="_new">
				<LinkedinIcon/>
				</a>
			</div>
		</footer>
	)
}

export default Footer;