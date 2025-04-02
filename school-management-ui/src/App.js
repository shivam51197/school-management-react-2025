import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import { HomeSchool } from './components/home-school';
import { RegisterStudent } from './components/register-student';
import { LoginTeacher } from './components/login-teacher';
import { LoginAdmin } from './components/login-admin';
import { SignUp } from './components/login-stu';
import { AdminDashboard} from './components/admin-dashboard';
import { StuloginDashboard } from './components/stulogin-dashboard';


function App() {
  return (
    <div className="body-background">
      <div className='bg-shade'>
         <h1 className='text-center text-warning pt-3'>School Management System</h1>
         <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeSchool/>} />
            <Route path='register-student' element={<RegisterStudent/>}/>
            <Route  path='login-teacher' element={<LoginTeacher/>}/>
            <Route path='login-admin' element={<LoginAdmin/>}/>
            <Route path='login' element={<SignUp/>}/>
            <Route path='admin-dash' element={<AdminDashboard/>}/>
            <Route path='sign-up' element={<StuloginDashboard/>}/>

          </Routes>
         </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
