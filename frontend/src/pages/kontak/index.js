import DefaultLayout from "@layouts/default";

export default function Kontak() {
  return (
    <p>kontak</p>
  );
}

Kontak.getLayout = function getLayout(page) {
  return (
    <DefaultLayout initPage={"kontak"}>
      {page}
    </DefaultLayout>
  );
}
