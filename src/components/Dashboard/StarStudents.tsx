import React from 'react';

const students = [
  {
    name: 'Evelyn Harper',
    id: 'PRE43178',
    marks: '1185',
    percent: '98%',
    year: '2014',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80'
  },
  {
    name: 'Diana Plenty',
    id: 'PRE43174',
    marks: '1165',
    percent: '91%',
    year: '2014',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80'
  },
  {
    name: 'John Millar',
    id: 'PRE43187',
    marks: '1175',
    percent: '92%',
    year: '2014',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80'
  },
  {
    name: 'Miles Esther',
    id: 'PRE45371',
    marks: '1180',
    percent: '93%',
    year: '2014',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80'
  }
];

const StarStudents = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Star Students</h2>
        <button>
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-4 font-medium">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="pb-4 font-medium">Name</th>
              <th className="pb-4 font-medium">ID</th>
              <th className="pb-4 font-medium">Marks</th>
              <th className="pb-4 font-medium">Percent</th>
              <th className="pb-4 font-medium">Year</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="py-4">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full" />
                    <span className="font-medium">{student.name}</span>
                  </div>
                </td>
                <td className="py-4">{student.id}</td>
                <td className="py-4">{student.marks}</td>
                <td className="py-4">{student.percent}</td>
                <td className="py-4">{student.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StarStudents;