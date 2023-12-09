import DefaultLayout from "@layouts/default";

export default function Home() {
  const imageUrl = 'https://spaceiq.com/wp-content/uploads/2020/11/Web_150DPI-20190305-WeWork-1330-Lagoon-Common-Areas-Wide-1-scaled.jpg';
    return (
      <div>
        <h1>Welcome To Coworking Space</h1>
        <img src={imageUrl} alt="Gambar Coworking Space" />
      </div>
    );
}

Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout initPage={"beranda"}>
      {page}
    </DefaultLayout>
  );
}
