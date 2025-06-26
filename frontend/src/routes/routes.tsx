// // src/routes/AppRoutes.tsx
// import { Routes, Route } from 'react-router-dom'
// import Home from '../pages/Home'
// import Login from '../pages/Login'
// import Profile from '../pages/Profile'

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/connexion" element={<Login />} />
//       <Route path="/profil" element={<Profile />} />
//     </Routes>
//   )
// }

// export default AppRoutes


import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/profil" element={<Profile />} />
    </Routes>
  );
}
