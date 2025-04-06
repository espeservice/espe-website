const stats = [
  {
    label: "Active Users",
    value: "50,000+",
    description: "Happy customers and service providers"
  },
  {
    label: "Services Completed",
    value: "100,000+",
    description: "Successful service deliveries"
  },
  {
    label: "Service Categories",
    value: "20+",
    description: "Different types of services"
  }
];

export function StatsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-xl font-semibold mb-1">{stat.label}</div>
            <div className="text-sm opacity-80">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 