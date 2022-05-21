import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'


const cx = classNames.bind(styles)

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0d21a9ad0530420a03469cad4fdf7f12~c5_300x300.webp?x-expires=1653292800&x-signature=O4ZkRgFo66Dsk8PnXPUE99T9Hvc%3D" alt="" />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span className={cx('')}>
                    Nguyen van A
                </span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>Nguyen Van A</span>
        </div>
    </div>;
}

export default AccountItem;