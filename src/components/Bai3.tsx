import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Bai3() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/employee?studentName=${searchKeyword}`);
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
      
        </div>
    </div>
  )
}
