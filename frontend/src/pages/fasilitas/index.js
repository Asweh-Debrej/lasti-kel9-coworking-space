import DefaultLayout from "@layouts/default";

export default function Fasilitas() {
  return (
    <p>fasilitas</p>
  );
}

Fasilitas.getLayout = function getLayout(page) {
  return (
    <DefaultLayout initPage={"fasilitas"}>
      {page}
    </DefaultLayout>
  );
}
