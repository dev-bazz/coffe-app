import { Stack } from 'expo-router';
import { useEffect } from 'react';

export default function RootLayout() {
	useEffect(() => {}, []);
	return (
		<Stack>
			{/* add group stack too (home) */}
			<Stack.Screen
				options={{ headerShown: false }}
				name="signin"
			/>
		</Stack>
	);
}
