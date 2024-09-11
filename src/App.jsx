import { useState } from "react";

const init = { name: "", age: 0 };
const Person = () => {
  const [person, setPerson] = useState({ ...init });
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(""); // 정렬 기준
  const [sortOrder, setSortOrder] = useState("asc"); // 정렬 순서
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 여부
  const [editIndex, setEditIndex] = useState(null); // 수정할 사람의 인덱스

  const onChangePerson = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const onSubmit = () => {
    if (isEditing) {
      // 수정 모드일 때
      const updatedPeople = [...people];
      updatedPeople[editIndex] = person;
      setPeople(updatedPeople);
      setIsEditing(false); // 수정 모드 종료
      setEditIndex(null);
    } else {
      // 새로 추가할 때
      setPeople([...people, { ...person }]);
    }
    setPerson({ ...init }); // 입력 필드 초기화
  };

  // 수정 버튼 클릭 시
  const updatePerson = (index) => {
    setPerson(people[index]); // 해당 인덱스의 사용자 정보를 입력 필드로 불러옴
    setIsEditing(true);
    setEditIndex(index); // 수정할 인덱스를 저장
  };

  // 삭제 버튼 클릭 시
  const deletePerson = (index) => {
    const updatedPeople = people.filter((_, i) => i !== index); // 해당 인덱스의 사용자 삭제
    setPeople(updatedPeople);
  };

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
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
        <button onClick={onSubmit}>
          {isEditing ? "수정 완료" : "등록"}
        </button>
      </div>
      <br />
      <input onChange={(e) => setSearch(e.target.value)} placeholder="검색" />

      <table border={1}>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              이름 {sortKey === "name" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th onClick={() => handleSort("age")}>
              나이 {sortKey === "age" && (sortOrder === "asc" ? "▲" : "▼")}
            </th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {people
            .filter(({ name }) => name.includes(search)) // 검색 필터링
            .sort((a, b) => {
              // 정렬
              if (sortKey === "name") {
                return sortOrder === "asc"
                  ? a.name.localeCompare(b.name)
                  : b.name.localeCompare(a.name);
              } else if (sortKey === "age") {
                return sortOrder === "asc" ? a.age - b.age : b.age - a.age;
              }
              return 0;
            })
            .map(({ name, age }, index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{age}</td>
                <td>
                  <button onClick={() => updatePerson(index)}>수정</button>
                </td>
                <td>
                  <button onClick={() => deletePerson(index)}>삭제</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Person;
