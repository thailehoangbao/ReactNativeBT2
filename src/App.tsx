import { useState } from "react";

function App() {

  class Student {
    name: string;
    age: number;
    major: string;

    constructor(name: string, age: number, major: string) {
      this.name = name;
      this.age = age;
      this.major = major;
    }

    public display(): string {
      return `Name: ${this.name}, Age: ${this.age} tuổi, Major: ${this.major}`;
    }
  }
  const hocsinh: Student = new Student('',0,'');
  const [student,setStudent] = useState(hocsinh);
  return (
    <div className="App">
      <h1>Bài Tập 2:</h1>
      <p>
        Khởi tạo đối tượng Sinh Viên với các yêu cầu sau:

        Có các thuộc tính : name, age, major
        Xây dựng phương thức khởi tạo cho đối tượng Sinh Viên
        Xây dựng hàm display hiển thị thông tin : name, age, và major của sinh viên
      </p>
      <input type="text" id="name" placeholder="Nhập tên?" />
      <input type="number" id="age" placeholder="Nhập tuổi?" />
      <input type="text" id="major" placeholder="Nhập công việc?" />
      <button onClick={()=> {
        const name:any = document.querySelector('#name');
        const age:any = document.querySelector('#age');
        const major:any = document.querySelector('#major');
        hocsinh.age = age.value;
        hocsinh.name = name.value;
        hocsinh.major = major.value;
        setStudent(hocsinh);
      }}>Hiển Thị</button>
      <h2>Hiển thị Thông Tin:</h2>
      <p id="content">
        {student.display()}
      </p>

    </div>
  );
}

export default App;
