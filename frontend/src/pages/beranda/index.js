import DefaultLayout from "@layouts/default";

export default function Beranda() {
    const imageUrl = 'https://www.bing.com/ck/a?!&&p=09f8794b29082f08JmltdHM9MTcwMTk5MzYwMCZpZ3VpZD0zMDZlYmNlOS02YTUyLTYxODYtMDdjNC1hZjZlNmIwNDYwM2YmaW5zaWQ9NTU5MQ&ptn=3&ver=2&hsh=3&fclid=306ebce9-6a52-6186-07c4-af6e6b04603f&u=a1L2ltYWdlcy9zZWFyY2g_cT1nbWJhciBjb3dvcmtpbmcgc3BhY2UmRk9STT1JUUZSQkEmaWQ9QUIwMzdDNDkxQjg1NTY5REU3RkNEMUVFNDIwNDNDM0EyQjAxOThGRg&ntb=1';
    return (
      <div>
        <h1>Welcome To Coworking Space</h1>
        <img src={imageUrl} alt="Gambar Coworking Space" />
      </div>
    );
  }
  
  Fasilitas.getLayout = function getLayout(page) {
    return (
      <DefaultLayout initPage={"beranda"}>
        {page}
      </DefaultLayout>
    );
  }