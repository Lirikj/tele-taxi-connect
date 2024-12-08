import { CarTaxiFront } from "lucide-react";

const carTypes = [
  { id: "economy", name: "Economy", price: "₽150", time: "3 min" },
  { id: "comfort", name: "Comfort", price: "₽200", time: "5 min" },
  { id: "business", name: "Business", price: "₽350", time: "7 min" },
];

const CarSelection = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md rounded-t-3xl shadow-lg p-6 animate-slideUp">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4">Choose your ride</h2>
        <div className="space-y-3">
          {carTypes.map((car) => (
            <div
              key={car.id}
              className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <CarTaxiFront className="w-6 h-6 text-gray-600" />
                <div>
                  <h3 className="font-medium">{car.name}</h3>
                  <p className="text-sm text-gray-500">{car.time} away</p>
                </div>
              </div>
              <span className="font-semibold">{car.price}</span>
            </div>
          ))}
        </div>
        <button className="w-full mt-6 bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarSelection;