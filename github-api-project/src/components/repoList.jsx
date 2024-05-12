import { useState, useEffect } from "react";
import axios from "axios";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const MyRepos = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({}); // Add state for filters
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Adjust as needed

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = Math.max(0, indexOfLastItem - itemsPerPage); // Ensure non-negative index

  // Filter function based on search term and filters
  const filteredRepos = repos.filter((repo) => {
    const nameMatches = repo.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    let filterMatch = true;

    // Apply additional filters based on the `filters` state
    for (const filterKey in filters) {
      if (repo[filterKey] !== filters[filterKey]) {
        filterMatch = false;
        break;
      }
    }

    return nameMatches && filterMatch;
  });

  const currentRepos = filteredRepos.slice(indexOfFirstItem, indexOfLastItem); // Paginate filtered results

  const handleNext = () => {
    if (currentPage < Math.ceil(filteredRepos.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const githubUsername = import.meta.env.VITE_GITHUB_USERNAME; // Replace with your username
  const githubToken = import.meta.env.VITE_GITHUB_PAT

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.github.com/users/${githubUsername}/repos`,
          {
            headers: {
              Authorization: `token ${githubToken}`,
            },
          }
        );
        setRepos(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []); // Empty dependency array: fetch only on component mount

  return (
    <div>
      {isLoading && <p aria-live="polite" className="m-5 mb-8 font-bold text-xl">Loading repositories...</p>}
      {error && <p className="m-5 text-xl text-red-500">Error: {error.message}</p>}
     
      {repos.length === 0 && !isLoading && (
        <p className="text-xl font-bold m-5">No repositories found!.</p>
      )}
      <div>
        {/* Search input */}
        <input
          className="ml-5 mb-5 mt-10 block w-80 p-4 ps-10 text-sm text-black border rounded-lg  focus:ring-orange-300 focus:border-gray-300 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-300 dark:focus:border-gray-200"
          type="text"
          placeholder="Search repositories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search repositories"
        />
        {/* Add UI components for filters (optional) */}
      </div>
      {repos.length > 0 && (
        <>
              <h1 className="font-bold text-xl m-5 ">List of my Github Repository</h1>

          <ul className="ml-10" aria-label="List of Github repositories">
            {currentRepos.map((repo) => (
              <li key={repo.id} className="border p-2 m-2 lg:mr-[500px]">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={repo.name} // Add aria-label for each repo
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Pagination controls*/}
          {repos.length > 0 && (
            <div className="flex justify-center">
              {currentPage > 1 && (
                <button
                  onClick={handlePrevious}
                  className="font-bold text-xl underline m-5"
                  aria-label="Previous page"
                >
                  <ArrowBackIcon />
                  {"  "}Previous
                </button>
              )}
              {currentPage < Math.ceil(repos.length / itemsPerPage) && (
                <button
                  onClick={handleNext}
                  className="font-bold text-xl underline m-5"
                  aria-label="Next page"
                >
                  Next
                  <ArrowForwardIcon />
                  {"  "}
                </button>
              )}
            </div>
          )}
        </>
      )}
      
    </div>
  );
};

export default MyRepos;