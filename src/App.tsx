import React from "react";
import { AuthProvider } from "@contexts";
import { GlobalLayout } from "./GlobalLayout";

function App() {
	return (
		<AuthProvider>
			<GlobalLayout>
				<h1>Coucou</h1>
			</GlobalLayout>
		</AuthProvider>
	);
}

export default App;
