import imageProfile from '../component/bagikopi-removebg-preview.png'
import AOS from 'aos';
AOS.init();

export default function Banner() {
    return (
        <section className='banner_container'>
            <div className='profile_container' data-AOS='fade-up' data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom">
                <img src={imageProfile}></img>
                <p className='name' data-AOS='fade-up' data-aos-duration="1600" data-aos-anchor-placement="bottom-bottom">bagikopi.id</p>
                <p className='desc' data-AOS='fade-up' data-aos-duration="1600" data-aos-anchor-placement="bottom-bottom">Bagi Kopi Kaliurang yogyakarta</p>
            </div>
            <div className='banner_link' data-AOS='fade-up' data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom">
                <a href="http://">
                    <span class="material-symbols-outlined website" data-AOS='fade-up' data-aos-duration="2000">
                        handshake
                    </span></a>
                <a href="http://"><i class="fa-brands fa-instagram instagram" data-AOS='fade-up' data-aos-duration="2500"></i></a>
                <a href="http://">
                    <span class="material-symbols-outlined website" data-AOS='fade-up' data-aos-duration="3000">
                        language
                    </span></a>



            </div>
        </section>
    );
}