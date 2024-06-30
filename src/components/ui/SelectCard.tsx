interface SelectCardProps {
  icon: string;
  title: string;
  description: string;
}

export const SelectCard = ({ title, description, icon }: SelectCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-secondary-dark bg-primary-dark py-5">
      <img src={icon} className="h-12 w-12" alt="" />
      <div className="text-center">
        <div className="text-lg font-medium text-primary-dark">{title}</div>
        <div className="mt-2 text-xs text-secondary-dark">{description}</div>
      </div>
    </div>
  );
};
