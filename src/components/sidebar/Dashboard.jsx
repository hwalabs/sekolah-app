import { useEffect, useState } from "react";
import axios from "axios";
export default function Siswa() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/api/siswa")
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <h2>Data Siswa</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Kelas</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.nama}</td>
                            <td>{item.kelas}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}