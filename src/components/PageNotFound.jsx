const PageNotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-700">
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h1 className="text-5xl font-bold text-red-500">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-gray-700">Oops! The page you are looking for could not be found.</p>
        </div>
      </div>
    );
}

export default PageNotFound;