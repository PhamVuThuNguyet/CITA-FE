import styles from "../../styles/Header.module.css";
import Image from "next/future/image";
import banner from "../../public/banner.jpg";

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        src={banner}
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "auto"
        }}
        alt='Banner'
      />

      <div className={styles.content}>
        <p className={styles.title}>HỘI THẢO KHOA HỌC QUỐC GIA - CITA 2023</p>
        <p className={styles.sub_title}>
          CÔNG NGHỆ THÔNG TIN VÀ ỨNG DỤNG TRONG CÁC LĨNH VỰC
        </p>
      </div>
    </div>
  );
}
