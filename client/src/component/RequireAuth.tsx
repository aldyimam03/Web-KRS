import { Outlet } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
  allowedRole: ('user' | 'admin')[];
}

function RequireAuth({ children, allowedRole }: Props) {
  const profileString = localStorage.getItem('Profile');
  const profileObject = profileString ? JSON.parse(profileString) : null;

  if (!profileObject) {
    return <Outlet />;
  }

  const role = profileObject.role as 'user' | 'admin';

  if (!allowedRole.includes(role)) {
    return <Outlet />;
  }

  return children ?? <Outlet />;
}

export default RequireAuth;