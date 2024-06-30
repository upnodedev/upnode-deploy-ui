interface DashboardStatsCardProps {
  title: string;
  value: string;
}
export const DashboardStatsCard = ({
  title,
  value,
}: DashboardStatsCardProps) => {
  return (
    <div>
      <div className="text-sm font-medium text-tertiary-dark">{title}</div>
      <div className="mt-2 text-display-sm font-semibold text-primary-dark">
        {value}
      </div>
    </div>
  );
};
