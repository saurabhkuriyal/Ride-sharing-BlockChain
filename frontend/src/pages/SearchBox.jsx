import MapboxSearchBox from "../components/MapboxSearchbox";

function SearchBox() {
  const handleLocationSelect = (location) => {
    console.log(location);
  };

  return (
    <MapboxSearchBox
      mapboxToken="pk.eyJ1IjoidmFzdTAwMDk4IiwiYSI6ImNtNDN1ZzZhcDBmYXMyanE1OGp2cWsxbHQifQ.MnMXzfSqJNMhAcil2wpNyA"
      onLocationSelect={handleLocationSelect}
    />
  );
}

export default SearchBox;
