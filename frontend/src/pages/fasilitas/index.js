import DefaultLayout from "@layouts/default";
import { Box, Row, Col, Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const facilities = [
  {
    name: "Meeting Room",
    description : "Meeting room yang nyaman dan dilengkapi dengan fasilitas yang lengkap",
  },
  {
    name: "Event Space",
    description : "Event space yang nyaman dan dilengkapi dengan fasilitas yang lengkap",
  },
  {
    name: "Private Office",
    description : "Private office yang nyaman dan dilengkapi dengan fasilitas yang lengkap",
  },
];

export default function Fasilitas() {
  return (
    <div>
      <h1>Fasilitas Coworking Space</h1>
      {facilities.map((facility) => (
        <div 
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            margin: "0 auto",
          }}
        >
          
        <Card
          key={facility.name}
          style={{
           width: "270px"
          }}
        >
          <CardHeader>
            <h4 className="font-bold text-large">{facility.name}</h4>
          </CardHeader>
          <CardBody>
            <Image
              alt={facility.name}
              src={facility.image}
              width="100%"
            />
            <p className="mt-2">{facility.description}</p>
          </CardBody>
        </Card>
        </div>
      ))}
    </div>
  );
}

Fasilitas.getLayout = function getLayout(page) {
  return (
    <DefaultLayout initPage={"fasilitas"}>
      {page}
    </DefaultLayout>
  );
}
