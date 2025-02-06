export function PropertyCardSkeleton() {
  return (
    <div className="animate-pulse bg-gray-200 p-4 rounded-lg shadow-md w-full max-w-sm">
      <div className="h-48 bg-gray-300 rounded-md"></div>
      <div className="mt-4 h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="mt-4 flex space-x-2">
        <div className="h-10 bg-gray-300 rounded w-1/4"></div>
        <div className="h-10 bg-gray-300 rounded w-1/4"></div>
        <div className="h-10 bg-gray-300 rounded w-1/4"></div>
        <div className="h-10 bg-gray-300 rounded w-1/4"></div>
      </div>
      <div className="mt-4 h-6 bg-gray-300 rounded w-1/3"></div>
    </div>
  );
}