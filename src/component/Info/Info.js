import style from './Info.module.css'
import Item from '../Item/Item'

const Info = () => {

    return (
        <div className={style.container}>
            <div className={style.info_title}>
                <h1>About Us</h1>
            </div>
            <div className={`${style.info_container}`}>
                <div className={`${style.info_desc} ${style.card}`}>

                    <div>
                        <h1>Welcome to Book World</h1>
                        <p>Selamat datang di Book World, tempat di mana setiap halaman membawa Anda ke dunia baru! Kami dengan bangga menawarkan beragam koleksi buku, mulai dari novel fiksi yang memikat, buku non-fiksi yang informatif, hingga buku anak-anak yang penuh imajinasi. Di sini, Anda dapat menjelajahi berbagai genre dan penulis terkenal, serta menemukan karya-karya terbaru dan terlaris. Kami berkomitmen untuk memberikan pengalaman berbelanja yang menyenangkan dan mudah, dengan layanan pelanggan yang ramah dan profesional. Bergabunglah dengan komunitas pecinta buku kami dan temukan petualangan baru di setiap buku yang Anda baca!</p>
                    </div>

                    <div>
                        <h1>Join Us</h1>
                        <p>Daftar sekarang untuk mendapatkan berita terbaru tentang buku-buku baru, rekomendasi khusus, dan penawaran eksklusif. Jadilah bagian dari komunitas pembaca yang mencintai buku dan berbagi kecintaan ini dengan orang lain.</p>
                    </div>

                </div>
                <div className={style.info_image}>
                    <img src='icon/bookstore-logo.png' className={style.logo}></img>
                </div>
            </div>
        </div>
    )
}

export default Info;