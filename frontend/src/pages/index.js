import DefaultLayout from "@layouts/default";

export default function Home() {
  return (
    <p>beranda</p>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout initPage={"beranda"}>
      {page}
    </DefaultLayout>
  );
}
