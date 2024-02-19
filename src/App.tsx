import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Projects,
	Reviews,
	Tech,
} from "./components/layouts";
import { ThemeContextProvider } from "./context/ThemeProvider";

const App = () => {
	return (
		<BrowserRouter>
			<ThemeContextProvider>
				<Toaster
					position="bottom-center"
					reverseOrder={false}
					toastOptions={{
						style: {
							fontFamily: "Poppins",
							fontWeight: 500,
							borderRadius: "10px",
							background: "var(--primary-b)",
							color: "var(--primary-t)",
						},
					}}
				/>
				<div className="relative z-0 bg-primary-b text-primary-t">
					<Navbar />
					<Hero />
					<About />
					<Experience />
					<Tech />
					<Reviews />
					<Projects />
					<Contact />
				</div>
			</ThemeContextProvider>
		</BrowserRouter>
	);
};

export default App;
