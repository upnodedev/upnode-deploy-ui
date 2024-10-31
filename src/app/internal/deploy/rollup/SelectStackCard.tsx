interface SelectStackCardProps {
  img: string;
  title: string;
  description: string;
  isSelected: boolean;
  disabled?: boolean;
}
export const SelectStackCard = ({
  img,
  description,
  title,
  isSelected,
  disabled,
}: SelectStackCardProps) => {
  return (
    <div
      className={`flex-grow rounded-xl ${isSelected ? "bg-gradient-to-r from-[#72EDF2] to-[#5151E5]" : "bg-[#1f242fff]"} p-[1px] ${disabled ? "cursor-not-allowed grayscale opacity-75" : "cursor-pointer"} relative`}
    >
      <div className="relative overflow-hidden rounded-xl bg-primary-dark p-5 shadow-sm">
        {disabled && (
          <div className="bg-black absolute top-2 right-2">
            <div className="text-sm font-semibold text-secondary-light">Coming Soon</div>
          </div>
        )}
        <img
          src={img}
          alt=""
          className="absolute -bottom-1/2 -right-2 h-44 w-44 opacity-5"
        />
        <div className="flex items-center gap-5">
          <img src={img} alt="" className="h-16 w-16" />
          <div>
            <div className="text-lg font-semibold text-primary-dark">
              {title}
            </div>
            <div className="mt-2 text-md font-normal text-secondary-dark">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
