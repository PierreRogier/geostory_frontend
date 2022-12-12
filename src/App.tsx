import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "@contexts";
import { GlobalLayout } from "./GlobalLayout";
import { UserLayout } from "./UserLayout";
import { LoginView, NotFoundView } from "@views";

function App() {
	return (
		<AuthProvider>
			<GlobalLayout>
				<Routes>
					<Route path="login" element={<LoginView />} />
					<Route path="/*" element={<UserLayout />} />
					<Route path="*" element={<NotFoundView />} />
				</Routes>
			</GlobalLayout>
		</AuthProvider>
	);
}

export default App;
