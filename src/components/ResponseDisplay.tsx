
interface ResponseDisplayProps {
  response: string | null;
  isLoading: boolean;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response, isLoading }) => {
  if (isLoading) {
    return (
      <div className="p-4 bg-gray-50 rounded-md border border-gray-200 animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    );
  }

  if (!response) {
    return null;
  }

  return (
    <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
      <p className="font-sourceSerif leading-relaxed text-gray-800 whitespace-pre-line">
        {response}
      </p>
    </div>
  );
};

export default ResponseDisplay;
