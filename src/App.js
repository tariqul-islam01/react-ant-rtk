import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './App.css';

//layouts
import RootLayout from './components/layouts/RootLayout';

//pages
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="page-1" element={<Page1 />} />
			<Route path="page-2" element={<Page2 />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
