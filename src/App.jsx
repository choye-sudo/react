import { useState } from "react";

const init = { name: "", age: 0 };
const Person = () => {
  const [person, setPerson] = useState({ ...init });
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(""); // 정렬 기준
  const [sortOrder, setSortOrder] = useState("asc"); // 정렬 순서 (asc: 오름차순, desc: 내림차순)

  const onChangePerson = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const onSubmit = () => {
    setPerson({ ...init });
    setPeople([...people, { ...person }]);
  };

  const handleSort = (key) => {
    if (sortKey === key) {
      // 이미 같은 키로 정렬 중이면 순서를 반대로 변경
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // 새로운 정렬 기준으로 변경
      setSortKey(key);
      setSortOrder("asc"); // 기본 오름차순으로 설정
    }
  };

  const updatePerson = () =>{

  };

  const deletePerson = () =>{
    
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={person.name}
          onChange={onChangePerson}
          placeholder="이름"
        />
      </div>
      <div>
        <input
          name="age"
          type="number"
          value={person.age}
          onChange={onChangePerson}
          placeholder="나이"
        />
      </div>
      <div>
        <button onClick={onSubmit}>등록</button>
      </div>
      <br />
      <input onChange={(e) => setSearch(e.target.value)} placeholder="검색" />

      <table border={1}>
        <thead>
          <tr>
            {/* 클릭하면 정렬 기준을 name으로 변경 */}
            <th onClick={() => handleSort("name")}>
              이름 {sortKey === "name" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            {/* 클릭하면 정렬 기준을 age로 변경 */}
            <th onClick={() => handleSort("age")}>
              나이 {sortKey === "age" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
          </tr>
        </thead>
        <tbody>
          {people
            .filter(({ name }) => name.includes(search)) // 검색어 필터링
            .sort((a, b) => {
              // 정렬 기준에 따른 정렬 처리
              if (sortKey === "name") {
                return sortOrder === "asc"
                  ? a.name.localeCompare(b.name)
                  : b.name.localeCompare(a.name);
              } else if (sortKey === "age") {
                return sortOrder === "asc" ? a.age - b.age : b.age - a.age;
              }
              return 0; // 정렬 기준이 없으면 그대로 반환
            })
            .map(({ name, age }, index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{age}</td>
                <td><button onClick={() => updatePerson(name, age)}>수정</button></td>
                <td><button onClick={() => deletePerson(name)}>삭제</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Person;
