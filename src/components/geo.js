import React from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Geo = (props) => {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1Ijoic25laGEwMzUzIiwiYSI6ImNsM2J1aW8zdjA1dW4zY21tczloYmc1d20ifQ.Iret4GALU2I83oC7dCfTEw",
  });

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "40vh",
        width: "66vw",
        marginTop:"2%",
        marginBottom:"5%"
      }}
      center={[
        props.value && props.value.address
          ? parseInt(props.value.address.geo.lng)
          : 57.2232,
        props.value && props.value.address
          ? parseInt(props.value.address.geo.lat)
          : -38.2386,
      ]}
    >
      <Marker
        coordinates={[
          props.value && props.value.address
            ? parseInt(props.value.address.geo.lng)
            : 57.2232,
          props.value && props.value.address
            ? parseInt(props.value.address.geo.lat)
            : -38.2386,
        ]}
        anchor="bottom"
      >
        <p>{props.value && props.value.company ? props.value.company.name : ""}</p>
        <img
          alt=""
          style={{ height: "45px", width: "45px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0y-HVF8kGJg31nhZl-ZZ4WRC1CuFJNLlw_w&usqp=CAU"
        />
      </Marker>
    </Map>
  );
};

export default Geo;
