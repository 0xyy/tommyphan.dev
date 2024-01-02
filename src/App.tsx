import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Projects, Tech } from "./components/layouts";
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
				<div className="bg-primary-b text-primary-t relative z-0">
					<Navbar />
					<Hero />
					<About />
					<Experience />
					<Tech />
					<Projects />
					<Contact />
				</div>
			</ThemeContextProvider>
		</BrowserRouter>
	);
};

export default App;
