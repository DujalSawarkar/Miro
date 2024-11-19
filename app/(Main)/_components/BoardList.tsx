import React from "react";

interface Board {
  title: string;
  orgId: string;
  authorId: string;
  authorName: string;
  imageUrl: string;
}

interface BoardListProps {
  boards: Board[];
}

const BoardList: React.FC<BoardListProps> = ({ boards }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className=" border-b">
            <th className="text-left px-4 py-3 font-medium">Board</th>
            <th className="text-left px-4 py-3 font-medium">Organization ID</th>
            <th className="text-left px-4 py-3 font-medium">Author</th>
            <th className="text-left px-4 py-3 font-medium">Author ID</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board, index) => (
            <tr key={index} className="hover:bg-gray-50 border-b">
              {/* Icon and Title */}
              <td className="px-4 py-3 flex items-center space-x-4">
                <img
                  src={board.imageUrl}
                  alt={board.title}
                  className="w-12 h-12 object-cover rounded bg-gray-200"
                />
                <span className="font-medium text-gray-700">{board.title}</span>
              </td>

              {/* Organization ID */}
              <td className="px-4 py-3 text-gray-600">{board.orgId}</td>

              {/* Author */}
              <td className="px-4 py-3 text-gray-600">{board.authorName}</td>

              {/* Author ID */}
              <td className="px-4 py-3 text-gray-600">{board.authorId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BoardList;
