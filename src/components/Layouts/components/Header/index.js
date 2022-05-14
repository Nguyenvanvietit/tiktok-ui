import classNames from 'classnames/bind';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(styles);

console.log(images)
function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}> 
            <img src={images.logo} alt="Tiktok"></img> 
            <div className={cx('search')}>
                <input placeholder='Search accounts and videos' spellCheck={ false } />
                <button className={cx('clear')}> 
                    <FontAwesomeIcon icon={ faCircleXmark} /> 
                </button>
                <FontAwesomeIcon className={ cx('loading') } icon={ faSpinner} />  
                <button className={ cx('search-btn') }> 
                    <FontAwesomeIcon icon={ faMagnifyingGlass } />
                </button>
            </div>
            <div className={ cx('actions')}></div>
        </div>
    </header>
}

export default Header;