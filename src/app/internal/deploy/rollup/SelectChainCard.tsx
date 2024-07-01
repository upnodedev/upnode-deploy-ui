interface SelectChainCardProps {
  img: string;
  title: string;
  isSelected: boolean;
}

export const SelectChainCard = ({
  title,
  img,
  isSelected,
}: SelectChainCardProps) => {
  return (
    <div
      className={`flex-grow rounded-xl ${isSelected ? "bg-gradient-to-r from-[#72EDF2] to-[#5151E5]" : "bg-[#1f242fff]"} p-[1px]`}
    >
      <div className="relative overflow-hidden rounded-xl bg-primary-dark p-5 shadow-sm">
        <div className="flex flex-col items-center gap-3">
          <img src={img} alt="" className="h-[42px] w-[42px]" />
          <div className="text-lg font-semibold text-primary-dark">{title}</div>
        </div>
      </div>
    </div>
  );
};
