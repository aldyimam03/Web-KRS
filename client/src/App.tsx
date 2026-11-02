import { Suspense } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import './App.css';
import RequireAuth from './component/RequireAuth';
import Login from './page/LoginRegister/Login';
import Register from './page/LoginRegister/Register';
import PageLoading from './component/loader/PageLoading';
import Home from './page/admin/page/Home';

// Admin - Direct imports (no lazy for Phase 2)
import MataKuliah from './page/admin/page/MataKuliah';
import Kelas from './page/admin/page/Kelas';
import Fakultas from './page/admin/page/Fakultas';
import ProgramStudi from './page/admin/page/ProgramStudi';
import User from './page/admin/page/User';
import Dashboard from './page/admin/page/Dashboard';
import MatkulAdd from './page/admin/features/mataKuliah/components/MatkulAdd';
import MatkulEdit from './page/admin/features/mataKuliah/components/MatkulEdit';
import KelasAdd from './page/admin/features/kelas/components/KelasAdd';
import KelasEdit from './page/admin/features/kelas/components/KelasEdit';
import FakultasAdd from './page/admin/features/fakultas/components/FakultasAdd';
import FakultasEdit from './page/admin/features/fakultas/components/FakultasEdit';
import ProgramStudiAdd from './page/admin/features/programStudi/components/ProgramStudiAdd';
import ProgramStudiEdit from './page/admin/features/programStudi/components/ProgramStudiEdit';
import UserAddAdmin from './page/admin/features/user/components/UserAddAdmin';
import UserEdit from './page/admin/features/user/components/UserEdit';

// User Page
import HomeUser from './page/HomeUser';
import DashboardUser from './page/DashboardUser/DashboardUser';
import RandomKrs from './page/RandomKrs/RandomKrs';
import PlanningKrs from './page/PlanningKrs/features/PlanningKrs';
import MyPlan from './page/MyPlan/MyPlan';

const SuspenseWrapper = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Outlet />
    </Suspense>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Route User */}
        <Route element={<RequireAuth allowedRole={['user', 'admin']} />}>
          <Route path="/" element={<HomeUser />}>
            <Route element={<SuspenseWrapper />}>
              <Route index element={<DashboardUser />} />
              <Route path="random-krs" element={<RandomKrs />}>
                <Route path="filter" />
              </Route>
              <Route path="planning-krs" element={<PlanningKrs />} />
              <Route path="myplan" element={<MyPlan />} />
            </Route>
          </Route>
        </Route>

        {/* Route Admin */}
        <Route element={<RequireAuth allowedRole={['admin']} />}>
          <Route path="/admin" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route element={<SuspenseWrapper />}>
              <Route path="user-panel" element={<User />}>
                <Route path="tambah" element={<UserAddAdmin />} />
                <Route path=":kode" element={<UserEdit />} />
              </Route>
              <Route path="mata-kuliah" element={<MataKuliah />}>
                <Route path="tambah" element={<MatkulAdd />} />
                <Route path=":kode" element={<MatkulEdit />} />
              </Route>
              <Route path="fakultas" element={<Fakultas />}>
                <Route path="tambah" element={<FakultasAdd />} />
                <Route path=":kode" element={<FakultasEdit />} />
              </Route>
              <Route path="program-studi" element={<ProgramStudi />}>
                <Route path="tambah" element={<ProgramStudiAdd />} />
                <Route path=":kode" element={<ProgramStudiEdit />} />
              </Route>
              <Route path="kelas" element={<Kelas />}>
                <Route path="tambah" element={<KelasAdd />} />
                <Route path=":kode">
                  <Route path="jadwal">
                    <Route path=":kode" element={<KelasEdit />} />
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;