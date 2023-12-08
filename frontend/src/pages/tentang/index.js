import DefaultLayout from "@layouts/default";

export default function Tentang() {
  return (
    <p>tentang</p>
  );
}

Tentang.getLayout = function getLayout(page) {
  return (
    <DefaultLayout initPage={"tentang"}>
      {page}
    </DefaultLayout>
  );
}
