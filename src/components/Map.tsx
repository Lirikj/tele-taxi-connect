import { YMaps, Map as YandexMap, Placemark } from "@pbe/react-yandex-maps";

const Map = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 13,
    controls: ["zoomControl", "fullscreenControl"],
  };

  return (
    <div className="w-full h-screen">
      <YMaps>
        <YandexMap
          defaultState={defaultState}
          width="100%"
          height="100%"
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark geometry={[55.751574, 37.573856]} />
        </YandexMap>
      </YMaps>
    </div>
  );
};

export default Map;