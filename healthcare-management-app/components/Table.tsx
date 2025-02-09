interface TableProps {
    columns: string[];
    data: Record<string, any>[];
  }
  
  export default function Table({ columns, data }: TableProps) {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              {columns.map((col) => (
                <th
                  key={col}
                  className="py-3 px-4 text-left text-gray-700 dark:text-gray-300 border-b"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  {columns.map((col) => (
                    <td
                      key={col}
                      className="py-2 px-4 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      {row[col]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="py-4 text-center text-gray-500 dark:text-gray-400"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }