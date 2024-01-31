import { Navigate, Route, Routes } from 'react-router-dom'
import StudentDashboard from "./pages/StudentDashboard";
import StudentLogin from "./pages/StudentLogin";
import CourseDetails from "./pages/CourseDetails";
import CourseListing from "./pages/CourseListing";
import "./styles/reset.css"
import "./styles/app.css"
import { useSelector } from 'react-redux';
import "./styles/globals.css"

function App() {
  const student = useSelector(state => state.student);
  // useEffect(() => {
  //   fetch("/api/student/login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: "",
  //       password: "",
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //   })
  // }, [])

  // useEffect(() => {
  //   fetch("/api/student").then((res) => {
  //     console.log(res);
  //   })
  // }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<StudentLogin/>}/>
        <Route path="/student" element={<StudentDashboard/>}/>
        <Route path="/course" element={<CourseDetails/>}/>
        <Route path="/listing" element={<CourseListing/>}/>
      </Routes>
    </>
  )
}

export default App;
