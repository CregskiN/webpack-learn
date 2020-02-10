import avatar from './static/avatar.jpg';
// import style from './index.scss';
import createAvatar from './createAvatar';
import './index.scss';

createAvatar();

const img = new Image();
img.src = avatar;
// img.classList.add(style.avatar);

const root = document.getElementById('root');
root!.append(img);

root!.innerHTML = '<div class="iconfont icon-baobao"></div>'







