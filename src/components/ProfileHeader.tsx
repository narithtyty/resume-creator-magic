interface ProfileHeaderProps {
  name: string;
  title: string;
  imageUrl: string;
}

const ProfileHeader = ({ name, title, imageUrl }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 mb-8 animate-fade-up">
      <img
        src={imageUrl}
        alt={name}
        className="w-32 h-32 rounded-full object-cover border-4 border-accent"
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
          {name}
        </h1>
        <h2 className="text-xl md:text-2xl text-accent">{title}</h2>
      </div>
    </div>
  );
};

export default ProfileHeader;