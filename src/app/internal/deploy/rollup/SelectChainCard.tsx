interface SelectChainCardProps {
  img: string;
  title: string;
  isSelected: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const SelectChainCard = ({
  title,
  img,
  isSelected,
  onClick,
  disabled,
}: SelectChainCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex-grow rounded-xl ${isSelected ? "bg-gradient-to-r from-[#72EDF2] to-[#5151E5]" : "bg-[#1f242fff]"} p-[1px] ${disabled ? "cursor-not-allowed opacity-75 grayscale" : "cursor-pointer"}`}
    >
      <div className="relative overflow-hidden rounded-xl bg-primary-dark p-5 shadow-sm">
        {disabled && (
          <div className="bg-black absolute right-2 top-2">
            <div className="text-sm font-semibold text-secondary-light">
              soon
            </div>
          </div>
        )}
        <div className="flex flex-col items-center gap-3">
          <img src={img} alt="" className="h-[42px] w-[42px]" />
          <div className="text-lg font-semibold text-primary-dark">{title}</div>
        </div>
      </div>
    </div>
  );
};
