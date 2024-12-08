import { User } from "lucide-react";

interface TelegramProfileProps {
  name?: string;
  photoUrl?: string;
}

const TelegramProfile = ({ name = "User Name", photoUrl }: TelegramProfileProps) => {
  return (
    <div className="absolute top-4 left-4 z-10 flex items-center gap-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg animate-fadeIn">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
        {photoUrl ? (
          <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <User className="w-6 h-6 text-gray-400" />
        )}
      </div>
      <span className="pr-4 font-medium text-gray-800">{name}</span>
    </div>
  );
};

export default TelegramProfile;