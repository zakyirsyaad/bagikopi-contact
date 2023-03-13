import menu from '../component/Buku Menu FIX.pdf'
import AOS from 'aos'
AOS.init()

export default function Link() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = menu;
        link.download = 'Buku_Menu_Fix.pdf';
        link.click();
    };
    return (
        <section className="link_container">
            <a href="https://api.whatsapp.com/send/?phone=%2B6281252973743&text&type=phone_number&app_absent=0" target={"_blank"}
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000">
                <button>Reservation</button>
            </a>
            <button onClick={handleDownload}
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000"
            >Menu</button>
            <a href="https://goo.gl/maps/iBX3uyoPMhoPx7cM8" target={'_blank'}
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000">
                <button>Location</button>
            </a>
            <a href="https://gofood.co.id/yogyakarta/restaurant/bagi-kopi-kaliurang-6919a60c-570c-4a05-b155-0f85fe0b8ebc" target={'_blank'}
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000">
                <button>Go-Food</button>
            </a>
        </section>
    );
}