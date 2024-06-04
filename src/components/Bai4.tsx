import React,{useState , useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
export default function Bai4() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [studentName, setStudentName] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const studentName = params.get('studentName');
        if (studentName) {
        setStudentName(studentName);
        }
    }, [location]);

    const handleSearch = () => {
        navigate(`/student?studentName=${searchKeyword}`);
    };
  return (
    <div>
         <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder="Nhập từ khóa tìm kiếm"
          className="border rounded p-2 mr-2 w-64"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white rounded p-2"
        >
          Tìm kiếm
        </button>
      </div>
      {studentName && (
        <div className="mt-4">
          <p>Kết quả mong đợi: {studentName}</p>
        </div>
      )}
    </div>
    </div>
  )
}
