const SectionTitle = ({title, description}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="uppercase font-semibold text-center text-blue-500 text-sm">{title}</h1>
      <h1 className="text-center text-4xl font-semibold text-gray-700 mt-4">{description}</h1>
    </div>
  );
};

export default SectionTitle;
