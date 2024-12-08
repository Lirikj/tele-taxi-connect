import TelegramProfile from "../components/TelegramProfile";
import AddressSearch from "../components/AddressSearch";
import CarSelection from "../components/CarSelection";
import Map from "../components/Map";

const Index = () => {
  return (
    <div className="relative h-screen">
      <Map />
      <TelegramProfile name="John Doe" />
      <AddressSearch />
      <CarSelection />
    </div>
  );
};

export default Index;