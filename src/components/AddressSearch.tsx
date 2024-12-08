import { MapPin } from "lucide-react";

const AddressSearch = () => {
  return (
    <div className="absolute top-20 left-4 right-4 z-10 animate-fadeIn">
      <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-4 max-w-md mx-auto">
        <div className="flex items-center gap-3 border border-gray-200 rounded-lg p-3">
          <MapPin className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Where to?"
            className="w-full bg-transparent border-none outline-none placeholder:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressSearch;